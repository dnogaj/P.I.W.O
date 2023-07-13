from flask_admin.contrib.sqla import ModelView
from flask import Flask, request, render_template
from flask_admin import Admin
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
from flask_cors import CORS

app = Flask(__name__)

CORS(app) # Zezwalamy na zapytania CORS z innej domeny

# set optional bootswatch theme
app.config['FLASK_ADMIN_SWATCH'] = 'cerulean'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///pythonsqlite.db'
app.config['SECRET_KEY'] = 'ugabuga'

db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(120), unique=True, nullable=False)

def create_and_commit():
    # Create the database and the db table
    db.create_all()

    # Commit the changes for the users
    db.session.commit()


with app.app_context():
    create_and_commit()

admin = Admin(app, name='iltam_zumra_rashupti_ilatim', template_mode='bootstrap4')

class MicroBlogModelView(ModelView):
    can_delete = False  # disable model deletion
    page_size = 50  # the number of entries to display on the list view

admin.add_view(MicroBlogModelView(User, db.session))

@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return {'error': 'Email and password required'}, 400

    user = User.query.filter_by(email=email).first()

    if user:
        return {'error': 'Email already in use'}, 400

    user = User(email=email, password_hash=generate_password_hash(password))

    db.session.add(user)
    db.session.commit()

    return {'message': 'User registered successfully'}, 201


@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    user = User.query.filter_by(email=email).first()

    if user and check_password_hash(user.password_hash, password):
        return {'message': 'Logged in successfully'}, 200

    return {'error': 'Invalid email or password'}, 400


if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
