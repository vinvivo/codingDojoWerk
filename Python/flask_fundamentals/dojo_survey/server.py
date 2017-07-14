''' Assignment: Dojo Survey
    Build a flask application that accepts a form submission, redirects, and
    presents the submitted data on a results page.

    The goal is to help you get familiar with sending POST requests through a
    form and displaying that information. Consider the below example as a
    guide.

    Hint: Although we've told you never to render from a post route, you'll
    need to do so for this assignment. We'll show you tools to avoid doing so
    soon.
'''

from flask import Flask, render_template, redirect, request

app = Flask(__name__)

@app.route('/')
def landing():
    return render_template("index.html")

@app.route('/results', methods =["POST"])
def results():
    truth = request.form['truth']
    comments = request.form['comments']
    return render_template("results.html", a_truth = truth, a_comments = comments)

app.run(debug = True)
