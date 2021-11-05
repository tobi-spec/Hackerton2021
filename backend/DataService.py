import pandas as pd
import json

# Data is copied into data folder manually
paradise_entity_path = "./data/csv_paradise_papers.2018-02-14/paradise_papers.nodes.entity.csv"

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


def get_top10_countries():
    df = pd.read_csv(path, dtype=paradise_entity_dtypes)
    df_sorted = df["countries"].value_counts().iloc[0:10]
    return df_sorted.to_json(orient="split")
