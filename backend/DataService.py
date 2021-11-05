import pandas as pd

# Data is copied into data folder manually
paradise_entity_path = "./data/csv_paradise_papers.2018-02-14/paradise_papers.nodes.entity.csv"
panama_entity_path = "./data/csv_panama_papers.2018-02-14/panama_papers.nodes.entity.csv"
bahamas_entity_path = "./data/csv_bahamas_leaks.2017-12-19/bahamas_leaks.nodes.entity.csv"
offshore_entity_path = "./data/csv_offshore_leaks.2018-02-14/offshore_leaks.nodes.entity.csv"

dtypes = {"node_id": int,
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


def get_top10_countries_default():
    return get_top10_attributes(paradise_entity_path, dtypes, "countries")


def get_top10_countries_paradise():
    return get_top10_attributes(paradise_entity_path, dtypes, "countries")


def get_top10_countries_panama():
    return get_top10_attributes(panama_entity_path, dtypes, "countries")


def get_top10_countries_bahamas():
    return get_top10_attributes(bahamas_entity_path, bahamas_entity_dtypes, "countries")


def get_top10_countries_offshore():
    return get_top10_attributes(offshore_entity_path, dtypes, "countries")


def get_top10_countries_offshore_by_service_provider(service_provider):
    return get_top10_countries_by_service_provider(offshore_entity_path, dtypes, service_provider)


def get_top10_attributes(path, dtypes, attribute):
    df = pd.read_csv(path, dtype=dtypes)
    df_sorted = df[attribute].value_counts().iloc[0:10]
    return df_sorted.to_json(orient="split")


def get_top10_countries_by_service_provider(path, dtypes, service_provider):
    df = pd.read_csv(path, dtype=dtypes)
    is_service_provider = df['service_provider']==service_provider
    df_filtered = df[is_service_provider]
    df_sorted = df_filtered["countries"].value_counts().iloc[0:10]
    return df_sorted.to_json(orient="split")
