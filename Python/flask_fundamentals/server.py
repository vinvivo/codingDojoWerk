from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def index():
    name = "Bart Simpson"
    # return render("Hello, world")
    return render_template("index.html", myname = name)

app.run(debug = True)