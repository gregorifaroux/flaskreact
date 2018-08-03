from flask import Flask, render_template, request, jsonify
from json import *
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

import backend.utils as myutils



@app.route('/', methods=['GET', 'POST'])
def home() -> 'json':
  jsonResp = {'message' : 'API is working!'}
  jsonResp['message'] = request.form.get('sentence')
  print(jsonify(jsonResp))
  return jsonify(jsonResp)

@app.route('/findcommonletters', methods=['POST'])
def findcommonletters() -> 'html':
  print('**** FIND COMMON LETTERS ********')
  content = request.get_json()
  print(content)
  results = myutils.find_common_letters(content['sentence'], content['letters'])
  print('results: ' + str(results))
  return '{ "letters":"' + results + '"}'
  #return render_template('results.html', results_title='Common Letters:', the_results = results)
  #return '{ "name":"Fake data" }'

@app.route('/countvowels', methods=['POST'])
def countvowels() -> 'html':
  results = myutils.count_vowels(request.form['sentence'])
  return render_template('results.html', results_title='Vowels Count:', the_results = results)

app.run()
