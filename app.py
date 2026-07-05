import streamlit as st
from detector import detect_threats

st.set_page_config(page_title="AI Threat Detection Dashboard", layout="wide")

st.title("🛡️ AI Threat Detection Dashboard")

data = detect_threats("logs.csv")

st.subheader("Security Logs")
st.dataframe(data)

st.subheader("Threat Summary")

high = len(data[data["Threat"] == "High Threat"])
medium = len(data[data["Threat"] == "Medium Threat"])
safe = len(data[data["Threat"] == "Safe"])

col1, col2, col3 = st.columns(3)

col1.metric("High Threats", high)
col2.metric("Medium Threats", medium)
col3.metric("Safe", safe)

st.subheader("Threat Distribution")
st.bar_chart(data["Threat"].value_counts())