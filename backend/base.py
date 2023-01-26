from flask import Flask
import urllib.request, json
import os

api=Flask(__name__)
@api.route('/profile')
def get_profile():
  response_body = {
    'name': 'Miras',
    'about':'Hello, I am Software Engineer.'
  }
  return response_body
  # url = "https://api.themoviedb.org/3/discover/movie?api_key={}".format(os.environ.get("TMDB_API_KEY"))
  # response = urllib.request.urlopen(url)
  # data = response.read()
  # dict = json.loads(data)
  # movies = []
  # for movie in dict['results']:
  #   movie = {
  #     'title':movie['title'],
  #     'overview':movie['overview']
  #   }
  #   movies.append(movie)
  # return {
  #   'results':movies
  # }
if __name__ == '__main__':
    app.run(debug=True)