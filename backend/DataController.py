from flask import Flask
from flask import request

import CountryService
import PeopleService
import SearchService

app = Flask(__name__)


@app.route('/')
def get_connection():
    return 'Hello, World! This server works fine!'


@app.route("/country")
def get_country_values():

    args = request.args

    source = "paradise"
    attribute = "countries"

    if "attribute" in args:
        attribute = args.get("attribute")

    if "source" in args:
        source = args.get("source")

        if source == "bahamas":
            return CountryService.get_top10_bahamas(attribute)

        if source == "offshore":

            if "service_provider" in args:
                service_provider = args.get("service_provider")
                return CountryService.get_top10_offshore_by_service_provider(service_provider, attribute)

            else:
                return CountryService.get_top10_offshore(attribute)

        if source == "panama":
            return CountryService.get_top10_panama(attribute)

        if source == "paradise":
            return CountryService.get_top10_paradise(attribute)

        else:
            return CountryService.get_top10_countries_default()


@app.route("/people")
def get_officer_values():
    args = request.args
    source = "paradise"
    interm = "y"

    if "source" in args:
        source = args.get("source")

    if "interm" in args:
        interm = args.get("interm")

    return PeopleService.get_top10_people_countries(source, interm)

@app.route("/search", methods=['POST'])
def search_for_value():
    data = request.form
    return SearchService.search_for_value(data.name)