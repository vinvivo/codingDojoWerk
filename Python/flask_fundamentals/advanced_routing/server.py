from flask import Flask, render_template, request, redirect

app = Flask(__name__)

@app.route('/users/<username>/<id>')     # string between <> becomes a variable that can be a callback
def show_user_profile(username, id):    # here, 'username' is the argument referring to the route URL
    print username
    print id
    return render_template("user.html")

app.run(debug = True)