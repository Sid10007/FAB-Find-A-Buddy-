from flask import Flask, render_template, request, session
#from flask.ext.sqlalchemy import SQLAlchemy
#from models import Result


app = Flask(__name__)

#app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://dotslash-230505:asia-southeast1:dotslash-2'
#db = SQLAlchemy(app)

app.secret_key = 'super secret key'

@app.route("/")
def index():
    return render_template("index.html")

if __name__ == "__main__":
    app.run()
