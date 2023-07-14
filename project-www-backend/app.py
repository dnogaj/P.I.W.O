from datetime import datetime
from random import randint
from flask import jsonify
from flask_admin.contrib.sqla import ModelView
from flask import Flask, request, render_template, url_for
from flask_admin import Admin
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
from flask_cors import CORS
from dateutil.parser import parse
import requests

app = Flask(__name__)

CORS(app)  # Zezwalamy na zapytania CORS z innej domeny

# set optional bootswatch theme
app.config['FLASK_ADMIN_SWATCH'] = 'cerulean'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///pythonsqlite.db'
app.config['SECRET_KEY'] = 'ugabuga'

db = SQLAlchemy(app)


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(120), unique=True, nullable=False)


class NewsletterEmail(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    forget_not = db.Column(db.BigInteger, unique=True, nullable=False)  # unsubscribe number


class Alerts(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(120), unique=True, nullable=False)
    text = db.Column(db.String(2048), unique=True, nullable=False)
    
class Article(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100))
    start_date = db.Column(db.Date)
    end_date = db.Column(db.Date)
    category = db.Column(db.String(50))
    admin_approval = db.Column(db.Boolean, default=False)

    def __init__(self, title, start_date, end_date, category):
        self.title = title
        self.start_date = start_date
        self.end_date = end_date
        self.category = category


def create_and_commit():
    # Create the database and the db table
    db.create_all()

    # Commit the changes for the users
    db.session.commit()


with app.app_context():
    create_and_commit()

admin = Admin(app, name='Panel Admina strony P.I.W.O', template_mode='bootstrap4')


class MicroBlogModelView(ModelView):
    can_delete = True  # disable model deletion
    page_size = 50  # the number of entries to display on the list view


admin.add_view(MicroBlogModelView(User, db.session))
admin.add_view(MicroBlogModelView(NewsletterEmail, db.session))
admin.add_view(MicroBlogModelView(Alerts, db.session))
admin.add_view(MicroBlogModelView(Article, db.session))

# Weryfikacja reCAPTCHA
def verify_recaptcha(recaptcha_response):
    secret_key = '6Lem2SInAAAAABNwckn-jN6IsWu3P2tsIMGZCX2V'
    recaptcha_data = {
        'secret': secret_key,
        'response': recaptcha_response
    }
    r = requests.post('https://www.google.com/recaptcha/api/siteverify', data=recaptcha_data)
    result = r.json()
    
    # Jeśli operacja weryfikacji się powiodła, wynik zawierać będzie pole 'success' ustawione na True.
    if result.get('success'):
        return True
    else:
        return False

# Register
@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    recaptcha_response = data.get('g-recaptcha-response')

    # Weryfikacja reCAPTCHA
    if not verify_recaptcha(recaptcha_response):
        return {'error': 'Invalid reCAPTCHA. Please try again.'}, 400

    if not email or not password:
        return {'error': 'Email and password required'}, 400

    user = User.query.filter_by(email=email).first()

    if user:
        return {'error': 'Email already in use'}, 400

    user = User(email=email, password_hash=generate_password_hash(password))

    db.session.add(user)
    db.session.commit()

    return {'message': 'User registered successfully'}, 201


# Login
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    user = User.query.filter_by(email=email).first()

    if user and check_password_hash(user.password_hash, password):
        return {'message': 'Logged in successfully'}, 200

    return {'error': 'Invalid email or password'}, 400


# Newsletter
@app.route('/newsletter', methods=['POST'])
def add_email():
    data = request.get_json()
    email = data.get('email')
    if email:
        existing_email = NewsletterEmail.query.filter_by(email=email).first()
        if existing_email:
            return {"error": "Email already exists!"}, 400
        no_infinite = 0
        while True:
            BFN = randint(68, 9223372036854775807)
            if not NewsletterEmail.query.filter_by(forget_not=BFN).first():
                break
        new_email = NewsletterEmail(email=email, forget_not=BFN)
        db.session.add(new_email)
        db.session.commit()
        return {"message": "Email added successfully!"}, 201
    else:
        return {"error": "No email provided!"}, 400


@app.route('/alerts', methods=['GET'])
def get_alerts():
    alerts = Alerts.query.all()
    alerts_data = []
    for alert in alerts:
        alert_data = {
            'id': alert.id,
            'title': alert.title,
            'text': alert.text,
        }
        alerts_data.append(alert_data)

    return jsonify(alerts_data)



@app.route('/events', methods=['GET'])
def get_events():
    articles = Article.query.filter_by(admin_approval=True).all()
    articles_data = []
    for article in articles:
        article_data = {
            'id': article.id,
            'title': article.title,
            'start': str(article.start_date),
            'end': str(article.end_date),
            'category': article.category
        }
        articles_data.append(article_data)

    return jsonify(articles_data)


@app.route('/events', methods=['POST'])
def create_event():
    data = request.get_json()
    title = data.get('title')
    start = parse(data.get('start'))
    end = parse(data.get('end'))
    category = data.get('category')
    print(title," ",start,"",type(start)," ",end," ",category)
    find_article = Article.query.filter_by(title=title, start_date=str(start).split(" ")[0], end_date=str(end).split(" ")[0], category=category).first()
    print(find_article)
    if find_article:
        return jsonify({'message': 'already exists'})

    new_article = Article(title=title, start_date=start, end_date=end, category=category)
    db.session.add(new_article)
    db.session.commit()
    return jsonify({'message': 'Event added'}), 201


@app.route('/unsubscribe/<token>')
def unsubscribe(token):
    if token:
        from newsleter_deleter import delete
        delete(token)
        return "Wypisanie z newslettera przebiegło pomyślnie. Nie będziesz już otrzymywać żadnych nowości z naszej strony."  #todo zmienic jakos zeby dzialalo
    else:
        return "Invalid unsubscription link."

@app.route('/', methods=['GET'])
def index():
    return f"""
    <h1>Panel admina znajduje się <a href="http://127.0.0.1:5000/admin/">TUTAJ</a></h1>
    """
    

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)