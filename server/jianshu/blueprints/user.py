



from flask import Blueprint, request, jsonify
from jianshu.models import User

user_bp = Blueprint('user', __name__)

def get_user_by_name(user_name):
    user = User.objects(user_name=user_name)
    if len(user) > 0:
        return user
    else:
        return {
            'msg': 'Could not search user by this user name',
            'status': '0001'
        }


def create_user(new_user):
    temp = User.objects(user_name=new_user.get('user_name'))
    if len(temp) > 0:
        return {
            'msg': 'User already existed',
            'status': '0001'
        }

    if new_user.get('user_name') is None:
        return {
            'msg': 'User name is required',
            'status': '0001'
        }

    if new_user.get('password_hash') is None:
        return {
            'msg': 'Password is required',
            'status': '0001'
        }

    if new_user.get('mail') is None:
        return {
            'msg': 'Mail is required',
            'status': '0001'
        }

    user = User()
    for key in new_user:
        user[key] = new_user[key]
    user.save()
    return {
        'msg': 'Create user successfully',
        'status': '0000',
        'data': user
    }


def update_user(new_user):
    users = User.objects(user_name=new_user.get('user_name', None))
    if len(users) <= 0:
        return {
            'msg': 'No this user to update',
            'status': '0001'
        }
    user = users[0]
    for [key, value] in new_user.items():
        user[key] = value

    user.save()
    return {
        'msg': 'Update user successfully',
        'status': '0000',
        'data': user
    }
   


@user_bp.route('/user', methods=['GET', 'POST', 'PUT'])
def user():
    if request.method == 'GET':
        name = request.args.get('user_name', None)
        user = get_user_by_name(name)
        return jsonify(user)

    elif request.method == 'POST':
        new_user = request.json
        ret = create_user(new_user)
        return jsonify(ret)

    elif request.method == 'PUT':
        user = request.json
        ret = update_user(user)
        return jsonify(ret)