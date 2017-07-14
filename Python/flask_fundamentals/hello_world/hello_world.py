from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def introduce_me():
    return render_template('index.html', name = "Vinney")

app.run(debug = True)