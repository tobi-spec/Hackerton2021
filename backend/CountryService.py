import pandas as pd
import Paths as Paths

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
    return get_top10_attributes(Paths.paradise_entity_path, dtypes, "countries")


def get_top10_paradise(attribute):
    return get_top10_attributes(Paths.paradise_entity_path, dtypes, attribute)


def get_top10_panama(attribute):
    return get_top10_attributes(Paths.panama_entity_path, dtypes, attribute)


def get_top10_bahamas(attribute):
    return get_top10_attributes(Paths.bahamas_entity_path, bahamas_entity_dtypes, attribute)


def get_top10_offshore(attribute):
    return get_top10_attributes(Paths.offshore_entity_path, dtypes, attribute)


def get_top10_offshore_by_service_provider(service_provider, attribute):
    return get_top10_by_service_provider(Paths.offshore_entity_path, dtypes, service_provider, attribute)


def get_top10_attributes(path, dtypes, attribute):
    df = pd.read_csv(path, dtype=dtypes)
    df_sorted = df[attribute].value_counts().iloc[0:10]
    return df_sorted.to_json(orient="split")


def get_top10_by_service_provider(path, dtypes, service_provider, attribute):
    df = pd.read_csv(path, dtype=dtypes)
    is_service_provider = df['service_provider']==service_provider
    df_filtered = df[is_service_provider]
    df_sorted = df_filtered[attribute].value_counts().iloc[0:10]
    return df_sorted.to_json(orient="split")
