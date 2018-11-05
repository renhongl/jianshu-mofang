

from flask import Blueprint, jsonify, request
from jianshu.models import Comment

comment_bp = Blueprint('comment', __name__)


def get_comment_by_id(id):
    try:
        comment = Comment.objects(id=id)
        if len(comment) > 0:
            return {
                'msg': 'Search comment successfully',
                'status': '0000',
                'data': comment
            }

        return {
            'msg': 'Could not search this comment',
            'status': '0001'
        }
    except:
        return {
            'msg': 'Could not search this comment',
            'stauts': '0001'
        }


def create_comment(new_comment):
    comment = Comment()
    for [key, value] in new_comment.items():
        comment[key] = value

    ret = comment.save()
    return {
        'msg': 'Create comment successfully',
        'status': '0000',
        'data': ret
    }



@comment_bp.route('/comment', methods=['GET', 'POST'])
def comment():
    if request.method == 'GET':
        id = request.args.get('id')
        ret = get_comment_by_id(id)
        return jsonify(ret)

    elif request.method == 'POST':
        json = request.json
        ret = create_comment(json)
        return jsonify(ret)

    