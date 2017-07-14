''' Assignment: What's My Name?
    Create a project that allows users to submit a form.

    "/": renders a landing page with a form.

    "/process": the route your form should submit to. In your process
    function, print the user's name and redirect to root.

    Be sure you understand the order in which the different events occur. This
    is critical. If you don't understand ask your instructor to help walk
    through the code.
'''

from flask import Flask, render_template, redirect, request

app = Flask(__name__)

@app.route('/')
def landing():
    return render_template("index.html")

@app.route('/process', methods =["POST"])
def process():
    print request.form['name']
    return redirect("/")

app.run(debug = True)
