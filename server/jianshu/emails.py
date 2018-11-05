

from flask_mail import Message
from jianshu.extensions import mail
from threading import Thread
from flask import current_app


def async_mail(app, msg):
    with app.app_context():
        mail.send(msg)

def welcome(to, user_name):
    app = current_app._get_current_object()
    msg = Message('简书', recipients=[to], body='欢迎['+user_name+']注册简书，您将在我们的网站中找到各种优秀的文章。如有任何疑问请联系扣扣：1075220132')
    thread = Thread(target=async_mail, args=(app, msg))
    thread.start()


def validate(to, code):
    msg = Message('简书', recipients=[to], body='此邮件用于简书验证，如果你未进行相关操作，请忽略此邮件。验证码为：%s，30分钟内有效。' % code)
    mail.send(msg)


