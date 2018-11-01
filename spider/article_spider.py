
from selenium import webdriver
from database import get_db, insert_one
from selenium.webdriver.support import expected_conditions as EC
import time, json, random

DATABASE = 'jianshu'
COLLECTION = 'article'

def get_browser():
    browser = webdriver.Chrome()
    return browser


def close_browser(browser):
    browser.close()


def get_article_links(browser):
    browser.get('https://www.jianshu.com')
    arctile_links = browser.find_elements_by_css_selector('.note-list li .title')
    return arctile_links


def get_article_infor(browser, link):
    link.click()
    browser.switch_to_window(browser.window_handles[1])
    arctile = {
        'title': browser.find_element_by_css_selector('.article').text,
        'author': browser.find_element_by_css_selector('.author .name').text
    }
    browser.close()
    browser.switch_to_window(browser.window_handles[0])
    return arctile


def save_to_db(articles):
    global DATABASE
    global COLLECTION
    db = get_db(DATABASE)
    for article in articles:
        insert_one(db, COLLECTION, article)


def save_to_file(file):
    with open('./output/a-' + str(random.random()) + '.txt', 'w', encoding='utf-8') as f:
        f.write(json.dumps(file, indent=4, ensure_ascii=False))


if __name__ == '__main__':
    try:
        browser = get_browser()
        links = get_article_links(browser)
        for link in links:
            infor = get_article_infor(browser, link)
            # print(infor['title'])
            save_to_file(infor)
            # save_to_db(articles)
    finally:
        time.sleep(5)
        close_browser(browser)