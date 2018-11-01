
from selenium import webdriver
from database import get_db, insert_one
from selenium.webdriver.support import expected_conditions as EC
import time, json, random

DATABASE = 'jianshu'
COLLECTION = 'article'
start_page = 1
PAGE_TOTAL = 20

def get_browser():
    browser = webdriver.Chrome()
    browser.get('https://www.jianshu.com')
    return browser


def close_browser(browser):
    browser.close()


def get_article_links(browser):
    global start_page
    global PAGE_TOTAL
    if start_page > 1:
        browser.execute_script('window.scrollTo(0, document.body.scrollHeight)')
        browser.find_elements_by_css_selector('.load-more').click()
        time.sleep(5)

    arctile_links = browser.find_elements_by_css_selector('.note-list li .title')
    print(len(arctile_links))
    ret = arctile_links[(start_page - 1) * PAGE_TOTAL: start_page * PAGE_TOTAL]
    start_page = start_page + 1
    return ret


def get_article_infor(browser, link):
    link.click()
    browser.switch_to_window(browser.window_handles[1])
    arctile = {
        'title': browser.find_element_by_css_selector('.article h1').text,
        'author': browser.find_element_by_css_selector('.author .name').text,
        'time': browser.find_element_by_css_selector('.author .publish-time').text,
        'words': browser.find_element_by_css_selector('.author .wordage').text,
        'views': browser.find_element_by_css_selector('.author .views-count').text,
        'comments': browser.find_element_by_css_selector('.author .comments-count').text,
        'likes': browser.find_element_by_css_selector('.author .likes-count').text,
        'content': browser.find_element_by_css_selector('.article .show-content').get_attribute("innerHTML")
    }
    browser.close()
    browser.switch_to_window(browser.window_handles[0])
    return arctile


def save_to_file(file):
    with open('./output/article/a-' + str(random.random()) + '.json', 'w', encoding='utf-8') as f:
        f.write(json.dumps(file, indent=4, ensure_ascii=False))


def save_data(links, browser):
    global PAGE_TOTAL
    global PAGE_TOTAL
    index = 0
    # total = PAGE_TOTAL
    total = 3
    for link in links:
        infor = get_article_infor(browser, link)
        # save_to_file(infor)
        insert_one(db, COLLECTION, infor)
        print('Saved: %s' % infor['title'])
        index = index + 1
        if index > total:
            links = get_article_links(browser)
            save_data(links, browser)

if __name__ == '__main__':
    db = get_db(DATABASE)
    try:
        browser = get_browser()
        links = get_article_links(browser)
        save_data(links, browser)

    finally:
        time.sleep(5)
        close_browser(browser)