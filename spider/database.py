
from pymongo import MongoClient

def get_db(db_name):
    client = MongoClient('localhost', 27017)
    db = client[db_name]
    return db

def insert_one(db, collection, data):
    coll = db[collection]
    coll.insert_one(data)

