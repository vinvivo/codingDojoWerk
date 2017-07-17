''' Advanced Validation
'''


from flask import Flask, flash, render_template, redirect, request, session
import re
app = Flask(__name__)
app.secret_key = 'KeepItSecretKeepItSafe'
@app.route('/', methods=['GET'])
def index():
  return render_template('index.html')

@app.route('/process', methods=['POST'])
def submit():
    if len(request.form['email']) < 1:
        # display validation errors
        flash("Email cannot be blank!")
    elif not EMAIL_REGEX.match(request.form['email']):
        flash("Invalid email address format")
    else:
        # display success message
        flash("Success!")
  #do some validations here!
  return redirect('/')
app.run(debug=True)

''' OTHER USEFUL VALIDATION TOOLS:
    str.isalpha() — returns a boolean that shows whether a string contains only alphabetic characters
    https://docs.python.org/2/library/stdtypes.html#string-methods
    time.strptime(string, format) -- changes a string to a time using the given format
'''