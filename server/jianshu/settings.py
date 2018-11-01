

import os

class BaseConfig(object):
    #for database
    MONGODB_DB = 'jianshu'
    MONGODB_HOST = 'localhost'
    MONGODB_PORT = 27017

    #for mail
    MAIL_SERVER = os.getenv('MAIL_SERVER')
    MAIL_PORT = 465
    MAIL_USE_SSL = True
    MAIL_USERNAME = os.getenv('MAIL_USERNAME')
    MAIL_PASSWORD = os.getenv('MAIL_PASSWORD')
    MAIL_DEFAULT_SENDER = ('简书官方', os.getenv('MAIL_USERNAME'))


class DevelopmentConfig(BaseConfig):
    pass


class ProductionConfig(BaseConfig):
    pass




config = {
    'development': DevelopmentConfig,
    'production': ProductionConfig
}