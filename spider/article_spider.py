
from selenium import webdriver
from database import get_db, insert_one
import time, json, random

COLLECTION = 'article'
PAGE_TOTAL = 20
END_PAGE = 1

start_page = 1
db = get_db('jianshu')

def get_browser():
    chrome_options = webdriver.ChromeOptions()
    chrome_options.add_argument('--headless')
    browser = webdriver.Chrome(options=chrome_options)
    browser.get('https://www.jianshu.com')
    return browser


def close_browser(browser):
    browser.close()


def scroll_down(browser):
    SCROLL_PAUSE_TIME = 0.5
    last_height = browser.execute_script("return document.body.scrollHeight")
    while True:
        browser.execute_script("window.scrollTo(0, document.body.scrollHeight);")
        time.sleep(SCROLL_PAUSE_TIME)
        new_height = browser.execute_script("return document.body.scrollHeight")
        if new_height == last_height:
            break
        last_height = new_height


def get_article_links(browser):
    global start_page
    global PAGE_TOTAL
    print('Getting page %d links' % start_page)
    if start_page > 1:
        browser.execute_script("window.scrollTo(0, document.body.scrollHeight);")
        time.sleep(5)

    arctile_links = browser.find_elements_by_css_selector('.note-list li .title')
    if len(arctile_links) < start_page * PAGE_TOTAL:
        scroll_down(browser)
        load_more = browser.find_element_by_css_selector('.load-more')
        load_more.click()
        time.sleep(5)
        arctile_links = browser.find_elements_by_css_selector('.note-list li .title')

    print('Total links: %d' % len(arctile_links))
    print('Want to take: %d - %d' % ((start_page - 1) * PAGE_TOTAL, start_page * PAGE_TOTAL))
    ret = arctile_links[(start_page - 1) * PAGE_TOTAL: start_page * PAGE_TOTAL]
    return ret


def get_article_infor(browser, link):
    browser.execute_script("arguments[0].click();", link)
    # link.click()
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


def save_to_file(file, file_name):
    with open('./output/article/a-' + file_name + '.json', 'w', encoding='utf-8') as f:
        f.write(json.dumps(file, indent=4, ensure_ascii=False))


def save_data(links, browser):
    global PAGE_TOTAL
    global start_page
    global db
    global END_PAGE
    index = 0
    for link in links:
        index = index + 1
        infor = get_article_infor(browser, link)
        file_name = 'Article-' + PAGE_TOTAL * (start_page - 1) + index
        # save_to_file(infor, file_name)
        # insert_one(db, COLLECTION, infor)
        print('%d. Saved: %s' % ((PAGE_TOTAL * (start_page - 1) + index), infor['title']))
            
    start_page = start_page + 1
    if start_page <= END_PAGE:
        links = get_article_links(browser)
        save_data(links, browser)


if __name__ == '__main__':
    try:
        browser = get_browser()
        links = get_article_links(browser)
        save_data(links, browser)

    finally:
        time.sleep(5)
        close_browser(browser)