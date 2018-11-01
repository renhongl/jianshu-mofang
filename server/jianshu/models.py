

from jianshu import db

class User(db.Document):
    email = db.EmailField(required=True)
    user_name = db.StringField(max_length=100, required=True)
    password_hash = db.StringField(max_length=100, required=True)
    user_logo = db.URLField(max_length=200)
    follower = db.IntField()
    followee = db.IntField()
    article_number = db.IntField()
    article_words = db.IntField()
    like_number = db.IntField()
    phone_number = db.StringField(max_length=20)
    bio = db.StringField(max_length=200)
    personal_website = db.URLField(max_length=200)
