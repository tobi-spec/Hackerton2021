from flask import Flask

import Config
import DataService

app = Flask(__name__)


@app.route('/')
def get_connection():
    return 'Hello, World! This server works fine!'


@app.route("/top10offshore")
def get_top10offshore():
    return DataService.get_top10_countries(Config.leaks_entity_path)


@app.route("/top10panama")
def get_top10panama():
    return DataService.get_top10_countries(Config.panama_entity_path)


@app.route("/top10paradise")
def get_top10paradise():
    return DataService.get_top10_countries(Config.paradise_entity_path)
