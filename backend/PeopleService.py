import pandas as pd

# Data is copied into data folder manually
paradise_officer_path = "./data/csv_paradise_papers.2018-02-14/paradise_papers.nodes.officer.csv"
panama_officer_path = "./data/csv_panama_papers.2018-02-14/panama_papers.nodes.officer.csv"
bahamas_officer_path = "./data/csv_bahamas_leaks.2017-12-19/bahamas_leaks.nodes.officer.csv"
offshore_officer_path = "./data/csv_offshore_leaks.2018-02-14/offshore_leaks.nodes.officer.csv"
paradise_intermediary_path = "./data/csv_paradise_papers.2018-02-14/paradise_papers.nodes.intermediary.csv"
panama_intermediary_path = "./data/csv_panama_papers.2018-02-14/panama_papers.nodes.intermediary.csv"
bahamas_intermediary_path = "./data/csv_bahamas_leaks.2017-12-19/bahamas_leaks.nodes.intermediary.csv"
offshore_intermediary_path = "./data/csv_offshore_leaks.2018-02-14/offshore_leaks.nodes.intermediary.csv"


dtypes = {"node_id": int,
                  "name": str,
                  "country_codes": str,
                  "countries": str,
                  "status": str,
                  "sourceID": str,
                  "valid_until": str,
                  "note": str
}


paradise_intermediary_dtypes = {"node_id":int ,
                       "name": str,
                       "country_codes": str,
                       "countries": str,
                       "sourceID": str,
                       "valid_until": str,
                       "note": str
}


def get_top10_people_countries(source):
    attribute = "countries"
    if source == "offshore":
        return get_top10_people_attributes(offshore_officer_path, dtypes, attribute)
    if source == "panama":
        return get_top10_people_attributes(panama_officer_path, dtypes, attribute)
    if source == "paradise":
        return get_top10_people_attributes(paradise_officer_path, dtypes, attribute)


def get_top10_people_attributes(path, dtypes, attribute):
    df = pd.read_csv(path, dtype=dtypes)
    df_sorted = df[attribute].value_counts().iloc[0:10]
    return df_sorted.to_json(orient="split")