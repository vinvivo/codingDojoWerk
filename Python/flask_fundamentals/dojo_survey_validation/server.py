''' Assignment: Dojo Survey with Validation
    Take the Dojo Survey assignment that you completed previously and add validations! The Name and Comment fields should be validated so that they are not blank. Also, validate that the comment field is no longer than 120 characters.
'''

from flask import Flask, flash, render_template, redirect, request, session
import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

app = Flask(__name__)
app.secret_key = 'keepitsecretkeepitsafe'

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/process', methods =["POST"])
def results():
    truth = request.form['truth']
    comments = request.form['comments']
    return render_template("results.html", a_truth = truth, a_comments = comments)

app.run(debug = True)
