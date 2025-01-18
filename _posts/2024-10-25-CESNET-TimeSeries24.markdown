---
layout: post
title: "CESNET-TimeSeries24: A Novel Dataset for Network Traffic Analysis and Forecasting"
date: 2024-10-25 00:00:00 +0200
---


The **CESNET-TimeSeries24** dataset is a groundbreaking contribution to the field of network traffic analysis, anomaly detection, and forecasting. Created from the real-world CESNET3 ISP network, this dataset spans **40 weeks of data** from over **275,000 active IP addresses**, offering unparalleled diversity and depth for researchers and practitioners.

## Why CESNET-TimeSeries24?

With the increasing importance of **anomaly detection** and **traffic forecasting** for network security, the need for high-quality datasets has never been greater. Most available datasets are either synthetic or lack the temporal depth required for robust evaluation. CESNET-TimeSeries24 addresses this gap by providing:

- **Real-world data**: Derived from live ISP network traffic.
- **Diverse behaviors**: Includes office computers, NATs, servers, Wi-Fi routers, honeypots, and even video game consoles.
- **Rich anomaly representation**: Covers point, contextual, collective, and trend anomalies.
- **Scalability**: Designed for forecasting tasks at various aggregation levels (10 minutes, 1 hour, 1 day).

## Dataset Highlights

1. **Volume and Scope**:
   - 66 billion IP flows
   - 4 trillion packets
   - 3.7 petabytes of data

2. **Comprehensive Anonymization**:
   - Strict privacy protocols were followed, ensuring no identifiable information is present.

3. **Time Series Aggregation**:
   - Aggregated at multiple intervals: 10 minutes, 1 hour, and 1 day.
   - Metrics include the number of flows, packets, bytes, unique destination IPs, transport layer ports, and much more.

4. **Data Hierarchies**:
   - Time series available at three levels:
     - Individual IP addresses
     - Institutions
     - Institutional subnets

![active-ip](/pictures/blog/3/active-ip.png)

![transmitted-data](/pictures/blog/3/transmitted-data.png)

## Key Features

### Metrics

The dataset offers a variety of metrics for each aggregation interval, such as:

- **Volumetric Metrics**: Number of flows, packets, bytes.
- **Unique Metrics**: Unique destination IPs, ASNs, and ports.
- **Directional Ratios**: Ratios for inbound/outbound packets and bytes.
- **Averages**: Flow duration and Time to Live (TTL).

### Anomaly Coverage

CESNET-TimeSeries24 includes:

- **Point Anomalies**: Isolated data points deviating from patterns.
- **Collective Anomalies**: Subsequence or pattern-based deviations.
- **Trend Anomalies**: Unexpected shifts in data trends.

### Validation and Usability

The dataset is thoroughly validated to ensure its suitability for:

- **Anomaly Detection**: Using unsupervised and supervised approaches.
- **Traffic Forecasting**: Ideal for time-series models like SARIMA, LSTM, and more.

![transmitted-data](/pictures/blog/3/anomalies.png)

## Example Usage

To demonstrate the utility of the dataset, we’ve provided an example repository:
[GitHub Repository - CESNET-TimeSeries24-Example](https://github.com/koumajos/CESNET-TimeSeries24-Example)

The repository includes:

- **Sample workflows** for time-series forecasting.
- **Preprocessing scripts** to handle gaps and aggregation.
- **Metrics evaluation** using standard techniques like RMSE, SMAPE, and R².

## Get the Dataset

The dataset is available for download at [Zenodo](https://zenodo.org/records/13382427).

### File Structure

The dataset is organized into:

- **Time series** grouped by aggregation intervals.
- **Identifiers** for IP addresses, institutions, and subnets.
- **Supplementary files** detailing weekends, holidays, and other metadata.

## Applications

CESNET-TimeSeries24 is perfect for:

1. **Anomaly Detection**: Identify zero-day attacks using historical behavioral changes.
2. **Traffic Forecasting**: Optimize resource allocation in networks.
3. **Security Research**: Evaluate and compare machine learning models on real-world data.

## Acknowledgments

This dataset was developed by researchers from **CESNET** and the **Czech Technical University in Prague**. It is a testament to the power of collaboration between academia and industry.

---

For questions or collaboration opportunities, feel free to reach out or contribute to the [GitHub repository](https://github.com/koumajos/CESNET-TimeSeries24-Example).
