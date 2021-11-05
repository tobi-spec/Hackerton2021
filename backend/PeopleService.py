import pandas as pd
import Paths as Paths

dtypes = {"node_id": int,
                  "name": str,
                  "country_codes": str,
                  "countries": str,
                  "status": str,
                  "sourceID": str,
                  "valid_until": str,
                  "note": str
}


def get_top10_people_countries(source, interm):
    attribute = "countries"
    if source == "offshore":
        return get_top10_people_attributes(Paths.offshore_officer_path, Paths.offshore_intermediary_path, dtypes, attribute, interm)
    if source == "panama":
        return get_top10_people_attributes(Paths.panama_officer_path, Paths.panama_intermediary_path, dtypes, attribute, interm)
    if source == "paradise":
        return get_top10_people_attributes(Paths.paradise_officer_path, Paths.paradise_intermediary_path, dtypes, attribute, interm)


def get_top10_people_attributes(officer_path, intermediary_path, dtypes, attribute, interm):
    officers = pd.read_csv(officer_path, dtype=dtypes)
    intermediary = pd.read_csv(intermediary_path, dtype=dtypes)
    if interm == "y":
        people = officers.append(intermediary)
    else:
        people = officers
    people_sorted = people[attribute].value_counts().iloc[0:10]
    return people_sorted.to_json(orient="split")