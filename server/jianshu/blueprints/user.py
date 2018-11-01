



from flask import Blueprint, request, jsonify
from jianshu.models import User

user_bp = Blueprint('user', __name__)

def get_user_by_name(user_name):
    user = User.objects.get_or_404(user_name=user_name)
    return user


def create_user(new_user):
    user = User()
    for key in new_user:
        user[key] = new_user[key]
    user.save()
    return user


def update_user(new_user):
    user = User.objects.get_or_404(user_name=new_user['user_name'])
    for key in new_user:
        user[key] = new_user[key]
    user.save()
    return user


@user_bp.route('/user', methods=['GET', 'POST', 'PUT'])
def user():
    if request.method == 'GET':
        name = request.args.get('name', 'None')
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