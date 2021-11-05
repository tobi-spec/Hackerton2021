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

    attribute = "countries"

    if "attribute" in args:
        attribute = args.get("attribute")

    if "source" in args:
        source = args.get("source")

        if source == "bahamas":
            return DataService.get_top10_bahamas(attribute)

        if source == "offshore":

            if "service_provider" in args:
                service_provider = args.get("service_provider")
                return DataService.get_top10_offshore_by_service_provider(service_provider, attribute)

            else:
                return DataService.get_top10_offshore(attribute)

        if source == "panama":
            return DataService.get_top10_panama(attribute)

        if source == "paradise":
            return DataService.get_top10_paradise(attribute)

        else:
            return DataService.get_top10_countries_default()

    else:
        return DataService.get_top10_countries_default()

