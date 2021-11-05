import pandas as pd
import json

# Data is copied into data folder manually
paradise_entity_path = "./data/csv_paradise_papers.2018-02-14/paradise_papers.nodes.entity.csv"
panama_entity_path = "./data/csv_panama_papers.2018-02-14/panama_papers.nodes.entity.csv"
bahamas_entity_path = "./data/csv_bahamas_leaks.2017-12-19/bahamas_leaks.nodes.entity.csv"
offshore_entity_path = "./data/csv_offshore_leaks.2018-02-14/offshore_leaks.nodes.entity.csv"

paradise_entity_dtypes = {"node_id": int,
          "name": str,
          "jurisdiction": str,
          "jurisdiction_description": str,
          "country_codes": str,
          "countries": str,
          "incorporation_date": str,
          "inactivation_date": str,
          "struck_off_date": str,
          "closed_date": str,
          "ibcRUC": str,
          "status": str,
          "company_type": str,
          "service_provider": str,
          "sourceID": str,
          "valid_until": str,
          "note": str
          }

panama_entity_dtypes = { "node_id": int,
        "name": str,
        "jurisdiction": str,
        "jurisdiction_description": str,
        "country_codes": str,
        "countries": str,
        "incorporation_date": str,
        "inactivation_date": str,
        "struck_off_date": str,
        "closed_date": str,
        "ibcRUC": str,
        "status": str,
        "company_type": str,
        "service_provider": str,
        "sourceID": str,
        "valid_until": str,
        "note": str
}

bahamas_entity_dtypes = {"labels(n)": str,
                         "valid_until": str,
                         "country_codes": str,
                         "countries": str,
                         "node_id": str,
                         "sourceID": str,
                         "address": str,
                         "name": str,
                         "jurisdiction_description": str,
                         "service_provider": str,
                         "jurisdiction": str,
                         "closed_date": str,
                         "incorporation_date": str,
                         "ibcRUC": str,
                         "type": str,
                         "status": str,
                         "company_type": str,
                         "note": str
}

offshore_entity_dtypes = { "node_id":int,
                           "name": str,
                           "jurisdiction": str,
                           "jurisdiction_description": str,
                           "country_codes": str,
                           "countries": str,
                           "incorporation_date": str,
                           "inactivation_date": str,
                           "struck_off_date": str,
                           "closed_date": str,
                           "ibcRUC": str,
                           "status": str,
                           "company_type": str,
                           "service_provider": str,
                           "sourceID": str,
                           "valid_until": str,
                           "note": str
}

def get_top10_countries_default():
    return get_top10_countries_paradise(paradise_entity_path, paradise_entity_dtypes)

def get_top10_countries_paradise():
    return get_top10_countries(paradise_entity_path, paradise_entity_dtypes)

def get_top10_countries_panama():
    return get_top10_countries(panama_entity_path, panama_entity_dtypes)

def get_top10_countries_bahamas():
    return get_top10_countries(bahamas_entity_path, bahamas_entity_dtypes)

def get_top10_countries_offshore():
    return get_top10_countries(offshore_entity_path, offshore_entity_dtypes)

def get_top10_countries_offshore_by_service_provider(offshore_entity_path, offshore_entity_dtypes, service_provider):
    return get_top10_countries(offshore_entity_path, offshore_entity_dtypes)

def get_top10_countries(path, dtypes):
    df = pd.read_csv(path, dtype=dtypes)
    df_sorted = df["countries"].value_counts().iloc[0:10]
    return df_sorted.to_json(orient="split")

def get_top10_countries_by_service_provider(path, dtypes, service_provider):
    df = pd.read_csv(path, dtype=dtypes)
    df_sorted = df["countries"].service_provider.eq(service_provider).value_counts().iloc[0:10]
    return df_sorted.to_json(orient="split")
