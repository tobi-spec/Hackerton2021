import re

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


list = [Paths.paradise_officer_path,
        Paths.paradise_intermediary_path,
        Paths.panama_officer_path,
        Paths.panama_intermediary_path,
        Paths.offshore_officer_path,
        Paths.offshore_intermediary_path]


def search_for_value(value):
    result = 0

    for i in list:
        df = pd.read_csv(i, dtype=dtypes)

        for entry in df['name']:
            if value.lower() in str(entry).lower():
                result = result + 1

    return str(result)
