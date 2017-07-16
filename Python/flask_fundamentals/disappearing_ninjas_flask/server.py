from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/ninja')
def ninjas():
    return render_template('ninja.html')

@app.route('/ninja/<ninja_color>')
def ninja_color(ninja_color):
    return render_template('ninjacolor.html', color=ninja_color)

app.run(debug = True)