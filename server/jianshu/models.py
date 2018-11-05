

from jianshu import db




class User(db.Document):
    # _id = db.FloatField(primary_key=True, unique=True)
    user_name = db.StringField(max_length=50, min_length=2, required=True)
    mail = db.EmailField(required=True)
    password_hash = db.StringField(max_length=100, min_length=6, required=True)
    follower = db.IntField()
    followee = db.IntField()
    user_logo = db.URLField(max_length=200)
    article_number = db.IntField()
    word_number = db.IntField()
    like_number = db.IntField()
    phone_number = db.StringField(max_length=20)
    introduction = db.StringField(max_length=200)


class Article(db.Document):
    # _id = db.FloatField(primary_key=True, unique=True)
    title = db.StringField(max_length=500, required=True)
    author = db.ReferenceField(User)
    time = db.DateTimeField()
    word_number = db.IntField()
    view_number = db.IntField()
    comment_number = db.IntField()
    like_number = db.IntField()
    content = db.StringField()
    

class Comment(db.Document):
    comment_for = db.ReferenceField(Article)
    comment_by = db.ReferenceField(User)
    content = db.StringField()
    time = db.DateTimeField()
    like_number = db.IntField()
    reply_number = db.IntField()







