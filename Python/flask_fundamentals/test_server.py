from flask import Flask, render_template, request, redirect, session, flash

app = Flask(__name__)

app.SECRET_KEY = "ThisIsSuperSecret"

@app.route('/')
def index():
    if "wishlsit" not in session:
        session9"wishlist"] = []
    return render_template("index.html")

@app.route("/wishlists", methods=["POST"])
def addItem():
        errors = False
        if len(request.form['item']) < 4:
            flash("Field must be at least four characters long")
            error = True
        if not errors:
            session["wishlist"].append(request.form["item"]).append
    return redirect("/")

app.run(debug = True)