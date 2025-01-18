---
layout: post
title: "Harnessing Periodicity Detection for Network Traffic Classification"
date: 2023-11-10 00:00:00 +0200
---

With the rise of encryption protocols and increasing reliance on secure communication, monitoring and classifying network traffic has become a daunting yet critical task. Despite these challenges, periodic behavior in network communications presents an exploitable feature for identifying and classifying traffic types, even in encrypted environments. Here, I discuss my novel method for detecting periodicity in network traffic and how it can be leveraged for accurate traffic classification.

## Introduction to Periodicity Detection

Periodic behavior in network traffic is a pattern where certain activities repeat at regular intervals. Such patterns arise naturally in various applications, ranging from keep-alive signals and polling mechanisms to botnet communications. By identifying these patterns, we can classify network activities without relying on content inspection, which is often rendered infeasible due to encryption.

The core of this methodology lies in **Flow Time Series (FTS)**—a representation of network dependencies extracted from packet flows—and the **Lomb-Scargle Periodogram** for detecting periodic signals in unevenly sampled data. This combination allows for a robust analysis of periodic behaviors while preserving computational efficiency for high-speed networks.

## Methodology

![Pic1](/pictures/blog/1/periodicity_methodology.png)

### 1. **Flow Time Series Creation**

A Flow Time Series groups IP flows based on network dependencies. Each dependency, represented as `IP:port-IP:port`, captures the communication context, such as DNS lookups or encrypted application traffic. Metrics like packet count, byte count, and inter-packet time intervals form the basis for analyzing periodicity.

### 2. **Periodicity Detection**

Using the Lomb-Scargle periodogram, we detect periodic signals in these unevenly sampled time series. The **Scargle's Cumulative Distribution Function (SCDF)** helps determine the statistical significance of observed peaks, thereby distinguishing periodic signals from noise. For classification purposes, periodic behaviors are categorized into:

- **Clear Periodicity**: Identifiable regular intervals with minimal variability.
- **Sinusoidal Periodicity**: Repeating patterns with moderate variance.

### 3. **Feature Engineering**

To quantify periodic behaviors, we compute:

- Statistical features (mean, standard deviation, skewness, kurtosis).
- Frequency-domain features (spectral bandwidth, energy, entropy, and flatness).
- Time-based features like periodicity and variability thresholds.

These features form the input for machine learning classifiers.

## Application: Network Traffic Classification

Our methodology has been applied to classify 61 types of network traffic, including social networks, cloud storage, malware, and system updates. Leveraging the engineered features, we trained an **XGBoost classifier**, achieving:

- **Accuracy**: 91%
- **F1-Score**: 90%

This approach is particularly effective for encrypted traffic, where traditional methods falter. For example, keep-alive signals and periodic malware communications are distinguishable despite encryption.

## Enhancing DeCrypto for Cryptomining Detection

An exciting application of this periodicity-based classification lies in detecting cryptocurrency miners. By integrating periodicity features into the **DeCrypto** system, we enhanced its precision and recall, achieving:

- **Accuracy**: 97.25%
- **False Positives**: Near-zero
- **Recall Improvement**: +7.74%

This enhancement enables reliable detection of cryptominers even in high-speed ISP networks.

## Conclusion

Periodic behavior detection offers a transformative approach to network traffic analysis and classification. By harnessing mathematical tools like the Lomb-Scargle periodogram and advanced machine learning, we can classify encrypted and unencrypted traffic with remarkable accuracy. This method not only aids in securing networks but also paves the way for further innovations in behavioral analysis and anomaly detection.

As encrypted traffic continues to rise, exploring periodicity offers a promising avenue for maintaining situational awareness and enhancing network security.

---

Feel free to reach out for discussions or collaborations!
