from flask import Flask

api=Flask(__name__)
@api.route('/profile')
def my_profile():
  response_body = {
    'name': 'Miras',
    'about':'Hello, I am Software Engineer.'
  }
  return response_body