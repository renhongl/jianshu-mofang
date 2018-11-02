





from flask import Blueprint, request, jsonify
from jianshu.models import Article

article_bp = Blueprint('article', __name__)

def get_article_by_title(title):
    article = Article.objects.get_or_404(title=title)
    return article


@article_bp.route('/article', methods=['GET', 'POST', 'PUT'])
def user():
    if request.method == 'GET':
        title = request.args.get('title', 'None')
        ret = get_article_by_title(title)
        return jsonify(ret)

    elif request.method == 'POST':
        new_article = request.json
        return jsonify(new_article)

    elif request.method == 'PUT':
        new_article = request.json
        return jsonify(new_article)