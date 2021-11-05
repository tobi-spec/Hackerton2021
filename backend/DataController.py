from flask import Flask
from flask import request

import DataService

app = Flask(__name__)


@app.route('/')
def get_connection():
    return 'Hello, World! This server works fine!'


@app.route("/country")
def get_country_values():

    args = request.args

    if "source" in args:
        source = args.get("source")

        if source == "bahamas":
            return DataService.get_top10_countries_bahamas()

        if source == "offshore":

            if "service_provider" in args:
                service_provider = args.get("service_provider")
                return DataService.get_top10_countries_offshore_by_service_provider(service_provider)

            else:
                return DataService.get_top10_countries_offshore()

        if source == "panama":
            return DataService.get_top10_countries_panama()

        if source == "paradise":
            return DataService.get_top10_countries_paradise()

        else:
            return DataService.get_top10_countries_default()

    else:
        return DataService.get_top10_countries_default()

