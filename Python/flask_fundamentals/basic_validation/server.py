from flask import Flask, flash, render_template, redirect, request, session
app = Flask(__name__)
app.secret_key = 'KeepItSecretKeepItSafe'
@app.route('/')
def index():
  return render_template('index.html')
@app.route('/process', methods=['POST'])
def process():
    if len(request.form['name']) < 1:
        # display validation errors
        flash("Name cannot be empty!")
    else:
        # display success message
        flash("Success! Your name is {}".format(request.form['name']))
  #do some validations here!
  return redirect('/')
app.run(debug=True)