

from jianshu import db

class User(db.Document):
    # _id = db.FloatField(primary_key=True, unique=True)
    mail = db.EmailField(required=True)
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
    

class Article(db.Document):
    _id = db.FloatField(primary_key=True, unique=True)
    title = db.StringField(max_length=500)
    author = db.StringField(max_length=100)
    time = db.StringField(max_legnth=50)
    words = db.StringField()
    views = db.StringField()
    comments = db.StringField()
    likes = db.StringField()
    content = db.StringField()



