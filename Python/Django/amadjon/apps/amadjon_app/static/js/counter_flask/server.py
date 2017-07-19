from flask import Flask, flash, redirect, render_template, request, session

app = Flask(__name__)
app.secret_key = 'THISISSECRET'

@app.route('/')
    def index():
       return render_template('index.html')

app.run(debug = True)