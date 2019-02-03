from flask import Flask, render_template, request, session,redirect,url_for
from flask_sqlalchemy import SQLAlchemy
import sys

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///dotslash'
app.debug = True
db = SQLAlchemy(app)

app.secret_key = 'super secret key'

class User(db.Model):
	name = db.Column(db.String(30), nullable = False)
	username = db.Column(db.String(20),primary_key = True,nullable = False)
	password = db.Column(db.String(30), nullable = False)
	gender = db.Column(db.String(10))
	expertise = db.Column(db.String(120))
	explore = db.Column(db.String(120))
	address = db.Column(db.String(30))

	def __init__(self, name, username, password, gender, address, explore, expertise):
		self.username = username
		self.name = name
		self.password = password
		self.gender = gender
		self.address = address
		self.expertise = expertise
		self.explore = explore

	def __repr__(self):
		return '<User %>' % self.username


@app.route("/")
def index():
    return render_template("index.html")

@app.route("/entry-login")
def entry_login():
	return render_template("entry.html")

@app.route("/entry-register")
def entry_register():
	return render_template("entry2.html")

@app.route("/home", methods = ['POST'])
def home():
	return render_template("home.html")

@app.route('/login', methods =['POST'])
def login():
	username = User.query.filter_by(username=request.form.get('username')).first()
	if username is None:
		return redirect(url_for("entry_login"))
	if username.password == request.form.get('pswd'):
		users = []
		match_index = [1] * 100
		match_index2 = []
		str = username.explore
		str = str.split(":")
		str0 = str[0]
		str1 = str[1]
		str2 = str[2]
		strr = username.expertise
		strr = strr.split(":")
		all_users = User.query.with_entities(User.name, User.expertise, User.explore)
		index = 0
		index2 = 0
		for user in all_users:
			parts = user.expertise.split(",")
			print(parts, file=sys.stderr)
			for part in parts:
				if str[1] in part:
					match_index[index] += 2
					if not (str[2] in part):
						match_index[index] += 1
					if (str[2] == "beginner" and "expert" in part) or (str[2] == "expert" and "beginner" in part):
						match_index[index] += 1
				elif str[0] in part:
					match_index[index] -= 1
			parts = user.explore.split(",")
			print(parts, file=sys.stderr)
			for part in parts:
				if strr[1] in part:
					match_index[index] += 2
					if not (strr[2] in part):
						match_index[index] += 1
					if (strr[2] == "beginner" and "expert" in part) or (strr[2] == "expert" and "beginner" in part):
						match_index[index] += 1
				elif strr[0] in part:
					match_index[index] -= 1
			if match_index[index] > 1:
				users.append(user)
				match_index2.append(match_index[index])
			print(user.name, match_index[index], file=sys.stderr)
			index += 1
		n = len(users)
		return render_template("home.html", users = users, match_index = match_index2, n = n)
	else:
		return redirect(url_for("entry_login"))

@app.route('/register', methods = ['POST'])
def register():
	user = User(request.form.get('name'),request.form.get('username'),request.form.get('pswd'), request.form.get('gender'), "", request.form.get('explore'), request.form.get('expertise'))
	db.session.add(user)
	db.session.commit()
	print(request.form.get('name') + request.form.get('gender'), file=sys.stderr)
	return redirect(url_for("entry_login"))

if __name__ == "__main__":
    app.run()
