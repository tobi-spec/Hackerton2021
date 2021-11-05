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


def search_for_value(value):
    df = pd.read_csv(Paths.paradise_officer_path, dtype=dtypes)
    found = df['name']==value

    return found
