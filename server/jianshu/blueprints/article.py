





from flask import Blueprint, request, jsonify
from jianshu.models import Article

article_bp = Blueprint('article', __name__)

def get_article_by_id(id):
    try:
        article = Article.objects(id=id)
        if len(article) > 0:
            return {
                'msg': 'Search article successfully',
                'status': '0000',
                'data': article
            }
        
        else:
            return {
                'msg': 'Could not search this article',
                'status': '0001'
            }
    except:
        return {
            'msg': 'Could not search this article',
            'status': '0001',
        }


def create_article(new_article):
    if new_article.get('title') is None:
        return {
            'msg': 'Article must have a title',
            'status': '0000'
        }

    article = Article()
    for [key, value] in new_article.items():
        article[key] = value

    ret = article.save()
    
    return {
        'msg': 'Create article successfully',
        'status': '0000',
        'data': ret
    }

def update_article(new_article):
    try:
        articles = Article.objects(id=new_article.get('id', None))
        if len(articles) < 0:
            return {
                'msg': 'No this article, could not update',
                'status': '0001'
            }

        article = articles[0]
        for [key, value] in new_article.items():
            article[key] = value

        ret = article.save()
        return {
            'msg': 'Update article successfully',
            'status': '0000',
            'data': ret
        }
    except:
        return {
            'msg': 'Could not search this article',
            'status': '0001',
        }

@article_bp.route('/article', methods=['GET', 'POST', 'PUT'])
def article():
    if request.method == 'GET':
        id = request.args.get('id', None)
        ret = get_article_by_id(id)
        return jsonify(ret)

    elif request.method == 'POST':
        new_article = request.json
        ret = create_article(new_article)
        return jsonify(ret)

    elif request.method == 'PUT':
        new_article = request.json
        ret = update_article(new_article)
        return jsonify(ret)