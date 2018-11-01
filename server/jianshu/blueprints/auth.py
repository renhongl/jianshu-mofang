

# include register, login, logout


from flask import Blueprint, request, jsonify
from jianshu.models import User

auth_bp = Blueprint('auth', __name__)


@auth_bp.route('/login', methods=['POST'])
def login():
    user = request.json
    temp = User.objects.get_or_404(user_name=user.get('user_name'), password_hash=user.get('password_hash'))
    return jsonify(temp)


@auth_bp.route('/logout', methods=['POST'])
def logout():
    user = request.json
    temp = User.objects.get_or_404(user_name=user['user_name'], password_hash=user['password_hash'])
    return jsonify(temp)


@auth_bp.route('/register', methods=['POST'])
def register():
    new_user = request.json
    temp = User.objects(user_name=new_user.get('user_name'))
    print('temp %s' % temp)
    if temp:
        return jsonify(msg='User exsited.')

    user = User()
    for key in new_user:
        user[key] = new_user[key]
    user.save()
    return jsonify(user)


