from flask import Flask

import DataService
from DataService import *

app = Flask(__name__)


@app.route('/')
def get_connection():
    return 'Hello, World! This server works fine!'


@app.route("/country")
def get_country_values():
    return DataService.get_top10_countries()
