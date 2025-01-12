---
layout: post
title: "Detecting Changes in Encrypted Traffic with AI: Introducing MFWDD"
date: 2025-01-12 19:30:00 +0200
---

In the rapidly evolving world of network traffic monitoring, machine learning (ML) has become a cornerstone for classification tasks. But as network protocols evolve and data patterns shift, maintaining the reliability of ML models is a constant challenge. Our research team at the Czech Technical University in Prague, together with CESNET, developed a solution to tackle these challenges head-on: Model-based Feature Weight Drift Detection (MFWDD).

This cutting-edge method is designed to detect and adapt to concept drift—changes in data patterns that can degrade the performance of machine learning models. Let’s dive into what makes MFWDD special and how it performs in the context of encrypted traffic classification.

## Understanding Concept Drift

Imagine training an ML model on data that represents today’s internet traffic. As months pass, changes in server configurations, protocol updates, and user behavior can create subtle yet significant differences in the data. These shifts, known as concept drifts, can cause the model’s accuracy to plummet.

MFWDD aims to address this by monitoring how feature importance changes over time. Unlike traditional drift detection methods that rely on error rates or full dataset retraining, MFWDD uses feature weights to pinpoint specific areas of change, making it a more efficient and insightful solution.

## Our Approach in Action

We evaluated MFWDD using two large-scale datasets: CESNET-TLS-Year22 (spanning an entire year) and CESNET-QUIC22 (capturing a month of encrypted QUIC traffic). Both datasets are available via the [`cesnet-datazoo`](https://github.com/CESNET/cesnet-datazoo) library, which streamlines access to these and similar datasets.

### Key highlights of our findings

- **Better Model Stability**: MFWDD guided timely retraining of ML models, ensuring consistent performance even as data patterns evolved.  
- **Efficient Drift Detection**: By focusing on weighted feature importance, MFWDD reduced unnecessary retraining, saving computational resources.  
- **Flexible Application**: The method works in both supervised and unsupervised scenarios, making it adaptable to a variety of real-world use cases.  

## Why It Matters

Network traffic is increasingly encrypted, which complicates traditional analysis techniques. Methods like MFWDD offer a way forward, providing insights without the need for decryption. For example, the CESNET datasets we used focus on TLS and QUIC protocols—common yet challenging areas for traffic classification.

Our research shows that even as encrypted traffic grows more complex, AI can keep pace by identifying and adapting to changes dynamically.

## Looking Ahead

We’ve made MFWDD open source to encourage further research and application. The framework is available on [GitHub](https://github.com/FETA-Project/MFWDD), where you can explore its code, methods, and datasets.

In the future, we aim to deepen our understanding of drift patterns—whether sudden, gradual, or recurring—and refine how ML models adapt. As networks continue to evolve, tools like MFWDD will be vital for maintaining secure and efficient monitoring systems.

Thanks to everyone who supported this research. For those interested in testing or contributing, join us on our journey to redefine encrypted traffic analysis!
