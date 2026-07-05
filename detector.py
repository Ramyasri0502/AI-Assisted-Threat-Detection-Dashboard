import pandas as pd

def detect_threats(file):
    df = pd.read_csv(file)

    def classify(row):
        if row["failed_attempts"] >= 5:
            return "High Threat"
        elif row["status"] == "Failed":
            return "Medium Threat"
        else:
            return "Safe"

    df["Threat"] = df.apply(classify, axis=1)

    return df