

# include register, login, logout


from flask import Blueprint, request, jsonify
from jianshu.models import User
from jianshu.emails import welcome

auth_bp = Blueprint('auth', __name__)


@auth_bp.route('/login', methods=['POST'])
def login():
    user = request.json
    temp = User.objects(user_name=user.get('user_name'), password_hash=user.get('password_hash'))
    if len(temp) > 0:
        return jsonify({
            'msg': 'Login successfully',
            'status': '0000',
            'data': temp
        })
    else: 
        return jsonify(msg='User name or password is wround.', status='0001')


#TODO sesstion control
@auth_bp.route('/logout', methods=['POST'])
def logout():
    user = request.json
    temp = User.objects.get_or_404(user_name=user['user_name'], password_hash=user['password_hash'])
    return jsonify(temp)


@auth_bp.route('/register', methods=['POST'])
def register():
    new_user = request.json

    if new_user.get('user_name') is None:
        return jsonify(msg='User Name can not be empty.', status='0001')

    if new_user.get('password_hash') is None:
        return jsonify(msg='Password can not be empty.', status='0001')

    if new_user.get('mail') is None:
        return jsonify(msg='Mail can not be empty.', status='0001')

    temp = User.objects(user_name=new_user.get('user_name'))
    if len(temp) > 0:
        return jsonify(msg='User exsited.', status='0001')
    
    user = User()
    for key in new_user:
        user[key] = new_user[key]
    user.save()

    welcome(new_user.get('mail'), new_user.get('user_name'))
    return jsonify({
        'msg': 'Register successfully',
        'status': '0000',
        'data': new_user
    })


