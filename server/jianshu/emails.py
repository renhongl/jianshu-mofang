

from flask_mail import Message
from jianshu.extensions import mail



def welcome(to):
    msg = Message('欢迎注册', recipients=[to], body='欢迎注册简书，您将在我们的网站中找到各种优秀的文章。')
    mail.send(msg)


def validate(to, code):
    msg = Message('简书验证', recipients=[to], body='此邮件用于简书验证，如果你未进行相关操作，请忽略此邮件。验证码为：%s，30分钟内有效。' % code)
    mail.send(msg)