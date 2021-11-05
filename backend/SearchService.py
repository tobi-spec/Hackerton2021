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

billionaire_dtypes = {"Name": str,
                      "NetWorth": str,
                      "Country": str,
                      "Source": str,
                      "Rank": str,
                      "Age": str,
                      "Industry": str
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


def search_for_billionaire(reload):

    if reload=="y":

        df = pd.read_csv(Paths.forbes_billionare_path, dtype=billionaire_dtypes)
        df = df.head(30)

        result = dict()
        index = 0
        position = 0

        for name in df['Name']:
            position = position + 1
            found = search_for_value(name)

            if int(found)>0:
                print(name)
                elem = {"name": name, "found": found, "position": position}
                result[index] = elem
                index = index + 1

        print("---DONE---")

        return result

    else:
        return {
            "0": {
                "found": "1",
                "name": "Bill Gates",
                "position": 4
                },
            "1": {
                "found": "1",
                "name": "Ma Huateng",
                "position": 15
            },
            "2": {
                "found": "3",
                "name": "MacKenzie Scott",
                "position": 22
            },
            "3": {
                "found": "1",
                "name": "Daniel Gilbert",
                "position": 23
            },
            "4": {
                "found": "7",
                "name": "Jack Ma",
                "position": 26
            }
}

