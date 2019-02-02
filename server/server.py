from flask import Flask, render_template, request, session,redirect,url_for
from flask_sqlalchemy import SQLAlchemy
import sys

#print('This is error output', file=sys.stderr)
#print('This is standard output', file=sys.stdout)
#from . import models
#from models import Result


app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///dotslash'
app.debug = True
db = SQLAlchemy(app)

app.secret_key = 'super secret key'

class User(db.Model):
	name = db.Column(db.String(30), nullable = False)
	username = db.Column(db.String(20),primary_key = True,nullable = False)
	password = db.Column(db.String(30), nullable = False)
	contact = db.Column(db.String(10), unique = True,nullable = False)
	gender = db.Column(db.String(10))
	AE1 = db.Column(db.String(30))
	AE2 = db.Column(db.String(30))
	AE3 = db.Column(db.String(30))
	Al1 = db.Column(db.String(30))
	Al2 = db.Column(db.String(30))
	Al3 = db.Column(db.String(30))

	def __init__(self, name, username, password, contact, gender, AE1, AE2, AE3, Al1, Al2, Al3):
		self.username = username
		self.name = name
		self.password = password
		self.contact = contact
		self.gender = gender
		self.AE1 = AE1
		self.AE2 = AE2
		self.AE3 = AE3
		self.Al1 = Al1
		self.Al2 = Al2
		self.Al3 = Al3

	def __repr__(self):
		return '<User %>' % self.username


@app.route("/")
def index():
    return render_template("index.html")

@app.route('/register', methods = ['POST'])
def register():
	user = User(request.form.get('name'),request.form.get('username'),request.form.get('pswd'),request.form.get('phone'),request.form.get('gender'), request.form.get('AE1'), request.form.get('AE2'), request.form.get('AE3'), request.form.get('Al1'), request.form.get('Al2'), request.form.get('Al3'))
	db.session.add(user)
	db.session.commit()
	print(request.form.get('AE1'), file=sys.stderr)
	return "<p>succesfull</p>"

if __name__ == "__main__":
    app.run()
