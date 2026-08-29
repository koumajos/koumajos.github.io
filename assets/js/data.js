/* Site data — single source of truth for publications, datasets and software.
   Citation counts reflect Google Scholar as of August 2026. */

'use strict';

const SITE = {
  name: 'Josef Koumar',
  title: 'Ing. Josef Koumar',
  role: 'Network Security Researcher',
  scholar: 'https://scholar.google.com/citations?user=J-mjgOEAAAAJ&hl=en',
  researchgate: 'https://www.researchgate.net/profile/Josef-Koumar',
  github: 'https://github.com/koumajos',
  linkedin: 'https://www.linkedin.com/in/josef-koumar/',
  email: 'josef.koumar@fit.cvut.cz',
  metrics: {
    publications: 17,
    citations: 187,
    hIndex: 6,
    i10Index: 4,
    datasets: 7,
    updated: 'August 2026'
  }
};

/* type: journal | conference | preprint | thesis */
const PUBLICATIONS = [
  {
    type: 'conference',
    year: 2026,
    title: 'Threat Detection in Network Traffic using Time Series Analysis',
    authors: ['Josef Koumar', 'Tomáš Čejka'],
    venue: 'IEEE Network Operations and Management Symposium (NOMS)',
    short: 'NOMS 2026',
    citations: 0
  },
  {
    type: 'conference',
    year: 2026,
    title: 'Device Type Classification on ISP Network using Time Series Analysis',
    authors: ['Karel Mudruňka', 'Josef Koumar', 'Kamil Jeřábek'],
    venue: 'IEEE Network Operations and Management Symposium (NOMS)',
    short: 'NOMS 2026',
    data: 'https://zenodo.org/records/17542827',
    citations: 0
  },
  {
    type: 'thesis',
    year: 2026,
    title: 'Threat Detection in Network Traffic using Time Series Analysis',
    authors: ['Josef Koumar'],
    venue: 'Doctoral dissertation, Faculty of Information Technology, Czech Technical University in Prague',
    short: 'PhD thesis',
    note: 'Submitted January 2026, defence expected October 2026',
    citations: 1
  },
  {
    type: 'journal',
    year: 2026,
    title: 'Comparative Analysis of Deep Learning Models for Real-World ISP Network Traffic Forecasting',
    authors: ['Josef Koumar', 'Timotej Smoleň', 'Kamil Jeřábek', 'Tomáš Čejka'],
    venue: 'IEEE Transactions on Network and Service Management',
    short: 'IEEE TNSM',
    details: 'vol. 23, pp. 715–728',
    quartile: 'Q1',
    doi: '10.1109/TNSM.2025.3636557',
    url: 'https://ieeexplore.ieee.org/document/11268324',
    code: 'https://github.com/koumajos/isp-forecasting-benchmark',
    citations: 5,
    abstract: 'Accurate network traffic forecasting is crucial for Internet service providers to optimize resources, improve user experience, and detect anomalies. Until recently, the lack of large-scale, real-world datasets limited the fair evaluation of forecasting methods. The newly released CESNET-TimeSeries24 dataset addresses this gap by providing multivariate traffic data from thousands of devices over 40 weeks at multiple aggregation granularities and hierarchy levels. In this study, we leverage the CESNET-TimeSeries24 dataset to conduct a systematic evaluation of state-of-the-art deep learning models and provide practical insights. Moreover, our analysis reveals trade-offs between prediction accuracy and computational efficiency across different levels of granularity. Beyond model comparison, we establish a transparent and reproducible benchmarking framework, releasing source code and experiments to encourage standardized evaluation and accelerate progress in network traffic forecasting research.'
  },
  {
    type: 'journal',
    year: 2025,
    title: 'CESNET-TimeSeries24: Time Series Dataset for Network Traffic Anomaly Detection and Forecasting',
    authors: ['Josef Koumar', 'Karel Hynek', 'Tomáš Čejka', 'Pavel Šiška'],
    venue: 'Scientific Data (Nature Portfolio)',
    short: 'Scientific Data',
    details: 'vol. 12, no. 1, art. 338',
    quartile: 'Q1',
    doi: '10.1038/s41597-025-04603-x',
    url: 'https://www.nature.com/articles/s41597-025-04603-x',
    data: 'https://zenodo.org/records/13382427',
    citations: 50,
    featured: true,
    abstract: 'Anomaly detection in network traffic is crucial for maintaining the security of computer networks and identifying malicious activities. Most approaches to anomaly detection use methods based on forecasting. Extensive real-world network datasets for forecasting and anomaly detection techniques are missing, potentially causing overestimation of anomaly detection algorithm performance and fabricating the illusion of progress. This manuscript tackles this issue by introducing a comprehensive dataset derived from 40 weeks of traffic transmitted by 275,000 active IP addresses in the CESNET3 network — an ISP network serving approximately half a million customers daily. It captures the behavior of diverse network entities, reflecting the variability typical of an ISP environment. This variability provides a realistic and challenging environment for developing forecasting and anomaly detection models, enabling evaluations that are closer to real-world deployment scenarios.'
  },
  {
    type: 'conference',
    year: 2025,
    title: 'Botnet Detection Through Periodic Patterns in Command-and-Control Network Traffic',
    authors: ['Dominik Oškera', 'Josef Koumar', 'Alžběta Pokorná', 'Kamil Jeřábek', 'Tomáš Čejka'],
    venue: '21st International Conference on Network and Service Management (CNSM)',
    short: 'CNSM 2025',
    doi: '10.23919/CNSM67658.2025.11297465',
    url: 'https://ieeexplore.ieee.org/document/11297465',
    data: 'https://zenodo.org/records/16752462',
    citations: 0,
    abstract: 'Detecting botnet Command-and-Control (C&C) communication in encrypted network traffic is a persistent challenge in cybersecurity, particularly in environments without endpoint visibility. We present a novel approach for botnet detection based on the inherent periodic communication patterns of C&C channels. Leveraging the Lomb-Scargle periodogram, we identify periodic behaviour in multiflow time series and extract periodic-based features for classification using machine learning. To address limitations in existing datasets, we introduce CESNET-CC25, a comprehensive and publicly available dataset comprising real-world botnet C&C traffic and benign traffic collected from an ISP backbone and controlled laboratory settings.'
  },
  {
    type: 'conference',
    year: 2025,
    title: 'CESNET TS-Zoo: A Library for Reproducible Analysis of Network Traffic Time Series',
    authors: ['Milan Kureš', 'Josef Koumar', 'Karel Hynek'],
    venue: '21st International Conference on Network and Service Management (CNSM)',
    short: 'CNSM 2025',
    doi: '10.23919/CNSM67658.2025.11297513',
    url: 'https://ieeexplore.ieee.org/document/11297513',
    citations: 0,
    abstract: 'Time Series Analysis (TSA) is an essential tool in computer networking, supporting tasks such as traffic forecasting, capacity planning, load balancing, quality of service monitoring, behavior profiling, and anomaly detection. Despite its widespread use, the community was limited by the lack of sufficient datasets. Our recent dataset, CESNET-TimeSeries24, finally fills this gap. However, its substantial size presents significant challenges for practical use in research. Therefore, we introduce the CESNET TS-Zoo library, designed to streamline dataset management, experiment setting, and reproducibility in the TSA of network traffic.'
  },
  {
    type: 'conference',
    year: 2025,
    title: 'DAF: Device Annotation Framework',
    authors: ['Matej Hulák', 'Václav Bartoš', 'Josef Koumar', 'Tomáš Čejka'],
    venue: '21st International Conference on Network and Service Management (CNSM)',
    short: 'CNSM 2025',
    doi: '10.23919/CNSM67658.2025.11297445',
    url: 'https://ieeexplore.ieee.org/document/11297445',
    citations: 0,
    abstract: 'Accurate identification of device type and operating system in network traffic is crucial for effective network monitoring, security enforcement, and anomaly detection. Nevertheless, creating datasets for this task is limited due to problematic annotation in a real-world environment. We propose Device Annotation Framework (DAF), a modular and extensible open-source framework for annotating large-scale network datasets with operating system and device type labels.'
  },
  {
    type: 'conference',
    year: 2025,
    title: 'Explainable Anomaly Detection in Network Traffic Using LLM',
    authors: ['Kamil Jeřábek', 'Josef Koumar', 'Jiří Setinský', 'Jaroslav Pešek'],
    venue: 'IEEE Network Operations and Management Symposium (NOMS)',
    short: 'NOMS 2025',
    url: 'https://ieeexplore.ieee.org/abstract/document/11073574',
    code: 'https://github.com/koumajos/explainable_anomaly_detection_using_LLM',
    citations: 7,
    abstract: 'Network anomaly detection is essential for modern cybersecurity, yet existing systems often generate numerous alerts without clear explanations, leading to inefficiencies and high false-positive rates. This paper proposes a novel approach that integrates Large Language Models (LLMs) with an anomaly detection framework to enhance explainability in network traffic analysis. Instead of directly detecting anomalies, the LLM only interprets already flagged anomaly events, providing insights into their potential root causes.'
  },
  {
    type: 'conference',
    year: 2025,
    title: 'Towards Building Network Outlier Detection System for Network Traffic Monitoring',
    authors: ['Josef Koumar', 'Jaroslav Pešek', 'Kamil Jeřábek', 'Tomáš Čejka'],
    venue: 'IEEE Network Operations and Management Symposium (NOMS)',
    short: 'NOMS 2025',
    url: 'https://ieeexplore.ieee.org/abstract/document/11073727',
    citations: 5,
    featured: true,
    abstract: 'Traffic monitoring is important for supporting network security and management. Recent advancements have explored machine learning-based approaches to classify encrypted traffic, yet the challenge of obtaining current threat datasets persists, leaving supervised models reliant on outdated information. This paper proposes a novel Network Outlier Detection System (NODS), a platform based on open-source software designed to detect outliers in network traffic by leveraging forecasting models. Our system was deployed and tested on a large ISP infrastructure.'
  },
  {
    type: 'preprint',
    year: 2025,
    title: 'When Simple Model Just Works: Is Network Traffic Classification in Crisis?',
    authors: ['Kamil Jeřábek', 'Jan Luxemburk', 'Richard Plný', 'Josef Koumar', 'Jaroslav Pešek', 'Karel Hynek'],
    venue: 'arXiv preprint arXiv:2506.08655',
    short: 'arXiv',
    url: 'https://arxiv.org/abs/2506.08655',
    citations: 6,
    abstract: 'Machine learning has been applied to network traffic classification (TC) for over two decades. While early efforts used shallow models, the latter 2010s saw a shift toward complex neural networks, often reporting near-perfect accuracy. However, it was recently revealed that a simple k-NN baseline using packet sequence metadata can be on par or even outperform more complex methods. We evaluate this baseline across 12 datasets and 15 TC tasks, and investigate why it performs so well. Our analysis shows that most datasets contain over 50% redundant samples, which frequently appear in both training and test sets due to common splitting practices.'
  },
  {
    type: 'journal',
    year: 2024,
    title: 'NetTiSA: Extended IP flow with time-series features for universal bandwidth-constrained high-speed network traffic classification',
    authors: ['Josef Koumar', 'Karel Hynek', 'Jaroslav Pešek', 'Tomáš Čejka'],
    venue: 'Computer Networks',
    short: 'Computer Networks',
    details: 'vol. 240, art. 110147',
    quartile: 'Q1',
    doi: '10.1016/j.comnet.2023.110147',
    url: 'https://www.sciencedirect.com/science/article/pii/S1389128623005923',
    code: 'https://github.com/koumajos/Classification_by_NetTiSA_flow',
    data: 'https://zenodo.org/records/8301043',
    citations: 34,
    featured: true,
    abstract: 'Network traffic monitoring based on IP flows is a standard monitoring approach that can be deployed to various network infrastructures, even the large ISP networks connecting millions of people. This paper proposes a novel extended IP flow called NetTiSA (Network Time Series Analysed) flow, based on analysing the time series of packet sizes. By thoroughly testing 25 different network traffic classification tasks, we show the broad applicability and high usability of NetTiSA flow. The novel features proved to be computationally inexpensive and showed excellent discriminatory performance, bringing machine learning traffic classification even to 100 Gbps backbone lines.'
  },
  {
    type: 'conference',
    year: 2024,
    title: 'MFWDD: Model-based Feature Weight Drift Detection Showcased on TLS and QUIC Traffic',
    authors: ['Lukáš Jančička', 'Dominik Soukup', 'Josef Koumar', 'Filip Němec', 'Tomáš Čejka'],
    venue: '20th International Conference on Network and Service Management (CNSM)',
    short: 'CNSM 2024',
    url: 'https://ieeexplore.ieee.org/abstract/document/10814630',
    citations: 3,
    abstract: 'Machine learning (ML) represents an efficient and popular approach for network traffic classification. However, network traffic inspection is a challenging domain and trained models may degrade soon after deployment. This paper proposes a novel method called Model-based Feature Weight Drift Detection (MFWDD) for concept drift detection. The MFWDD framework guided TLS and QUIC service classification model retraining throughout an extensive period and not only prevented model degradation but also improved its performance and consistency over time.'
  },
  {
    type: 'conference',
    year: 2024,
    title: 'Analysis of Statistical Distribution Changes of Input Features in Network Traffic Classification Domain',
    authors: ['Lukáš Jančička', 'Josef Koumar', 'Dominik Soukup', 'Tomáš Čejka'],
    venue: 'IEEE Network Operations and Management Symposium (NOMS)',
    short: 'NOMS 2024',
    url: 'https://ieeexplore.ieee.org/abstract/document/10575630',
    citations: 6,
    abstract: 'This study investigates the evolving landscape of network traffic monitoring, which is crucial for maintaining computer network services and security. The study focuses on the CESNET-TLS-Year22 dataset, derived from one year of TLS network traffic on the CESNET2 backbone. The main result of our analysis is the identification of the Weekend phenomenon in network traffic classification that is generally overlooked during ML model training.'
  },
  {
    type: 'conference',
    year: 2023,
    title: 'Network Traffic Classification Based on Single Flow Time Series Analysis',
    authors: ['Josef Koumar', 'Karel Hynek', 'Tomáš Čejka'],
    venue: '19th International Conference on Network and Service Management (CNSM)',
    short: 'CNSM 2023',
    doi: '10.23919/CNSM59352.2023.10327876',
    url: 'https://ieeexplore.ieee.org/abstract/document/10327876',
    code: 'https://github.com/koumajos/ClassificationBasedOnSFTS',
    data: 'https://zenodo.org/records/8035724',
    citations: 40,
    featured: true,
    abstract: 'Network traffic monitoring using IP flows is used to handle the current challenge of analyzing encrypted network communication. This paper proposes a novel flow extension for traffic features based on the time series analysis of the Single Flow Time series. We propose 69 universal features based on statistical analysis of data points, time domain analysis, packet distribution within the flow timespan, time series behavior, and frequency domain analysis, and demonstrate their universality on 15 publicly available datasets.'
  },
  {
    type: 'conference',
    year: 2023,
    title: 'Enhancing DeCrypto: Finding Cryptocurrency Miners Based on Periodic Behavior',
    authors: ['Josef Koumar', 'Richard Plný', 'Tomáš Čejka'],
    venue: '19th International Conference on Network and Service Management (CNSM)',
    short: 'CNSM 2023',
    doi: '10.23919/CNSM59352.2023.10327904',
    url: 'https://ieeexplore.ieee.org/abstract/document/10327904',
    code: 'https://github.com/koumajos/EnhancedDeCrypto',
    data: 'https://zenodo.org/records/8033351',
    citations: 1,
    abstract: 'While the popularity of cryptocurrencies is rising, the number of threat actors who use illegal coin miner malware is increasing as well. In this paper, we analyzed the long-term periodic behavior of cryptocurrency miners communicating in computer networks and propose a novel method for cryptominer detection using specially designed periodicity features, enhancing the flow-based detection system DeCrypto.'
  },
  {
    type: 'conference',
    year: 2023,
    title: 'Unevenly Spaced Time Series from Network Traffic',
    authors: ['Josef Koumar', 'Tomáš Čejka'],
    venue: '7th Network Traffic Measurement and Analysis Conference (TMA)',
    short: 'TMA 2023',
    url: 'https://ieeexplore.ieee.org/abstract/document/10198988',
    code: 'https://github.com/koumajos/USTS',
    data: 'https://zenodo.org/records/7923745',
    citations: 7,
    abstract: 'Reliable detection of security events is essential for network security. Contrary to currently used approaches, this paper presents Unevenly Spaced Time Series (USTS) as a feasible representation of network traffic with several benefits for analysis. A dataset containing over 35 million time series captured on a real ISP network was created to evaluate the properties of USTS.'
  },
  {
    type: 'conference',
    year: 2023,
    title: 'Augmenting Monitoring Infrastructure for Dynamic Software-Defined Networks',
    authors: ['Jaroslav Pešek', 'Richard Plný', 'Josef Koumar', 'Kamil Jeřábek', 'Tomáš Čejka'],
    venue: '8th International Conference on Smart and Sustainable Technologies (SpliTech)',
    short: 'SpliTech 2023',
    url: 'https://ieeexplore.ieee.org/abstract/document/10193216',
    citations: 3,
    abstract: 'Software-Defined Networking (SDN) and virtual environments raise new challenges for network monitoring tools. This paper describes a concept of automatic on-demand deployment of monitoring probes and correlation of network data with infrastructure state and configuration in time, increasing visibility into complex and dynamic networks.'
  },
  {
    type: 'conference',
    year: 2022,
    title: 'Network Traffic Classification Based on Periodic Behavior Detection',
    authors: ['Josef Koumar', 'Tomáš Čejka'],
    venue: '18th International Conference on Network and Service Management (CNSM)',
    short: 'CNSM 2022',
    details: 'pp. 359–363',
    url: 'https://ieeexplore.ieee.org/abstract/document/9964556',
    citations: 19,
    abstract: 'Even though encryption hides the content of communication from network monitoring and security systems, this paper shows a feasible way to retrieve useful information about the observed traffic. The paper deals with detection of periodic behavioral patterns of communication using time series created from network traffic by the autocorrelation function and the Lomb-Scargle periodogram. We experimented with a dataset of 61 classes and trained an XGBoost classifier reaching a 90% F1-score.'
  }
];

const DATASETS = [
  {
    title: 'CESNET-DeviceType24',
    year: 2025,
    text: 'Annotated device-type dataset derived from CESNET-TimeSeries24: 82,504 IP addresses labelled as end-device, server or net-device, with a temporal train/validation/test split.',
    url: 'https://zenodo.org/records/17542827'
  },
  {
    title: 'CESNET-CC25: Botnet Command-and-Control Dataset',
    year: 2025,
    text: 'Real-world botnet C&C traffic from an ISP backbone combined with controlled laboratory captures, published as a benchmark for periodicity-based botnet detection.',
    url: 'https://zenodo.org/records/16752462'
  },
  {
    title: 'CESNET-TimeSeries24',
    year: 2024,
    text: '40 weeks of network traffic time series from 275,000 active IP addresses in the CESNET3 ISP network, at multiple aggregation granularities. Published in Scientific Data.',
    url: 'https://zenodo.org/records/13382427',
    highlight: true
  },
  {
    title: 'NetTiSA flow datasets',
    year: 2023,
    text: 'Network traffic datasets extended with the NetTiSA flow — time-series features computed directly in the flow exporter.',
    url: 'https://zenodo.org/records/8301043'
  },
  {
    title: 'Single Flow Time Series datasets',
    year: 2023,
    text: 'Datasets created by Single Flow Time Series analysis, covering 25 network traffic classification tasks.',
    url: 'https://zenodo.org/records/8035724'
  },
  {
    title: 'CESNET-USTS23',
    year: 2023,
    text: 'A benchmark dataset of over 35 million unevenly spaced time series extracted from real ISP network traffic.',
    url: 'https://zenodo.org/records/7923745'
  },
  {
    title: 'CESNET-MINER22-TS',
    year: 2022,
    text: 'Periodic behavior features of cryptomining communication, used for cryptominer detection research.',
    url: 'https://zenodo.org/records/8033351'
  }
];

const SOFTWARE = [
  {
    title: 'CESNET TS-Zoo',
    text: 'Library providing a standardized API, preprocessing and reproducible experiment setup for the CESNET-TimeSeries24 dataset.',
    url: 'https://ieeexplore.ieee.org/document/11297513',
    linkLabel: 'Paper'
  },
  {
    title: 'ISP forecasting benchmark',
    text: 'Benchmark of deep learning forecasting models on real ISP traffic — the code and results behind the IEEE TNSM paper.',
    url: 'https://github.com/koumajos/isp-forecasting-benchmark',
    linkLabel: 'GitHub'
  },
  {
    title: 'ipfixprobe with time-series plugins',
    text: 'Build of the ipfixprobe flow exporter carrying the NetTiSA and time-series process plugins, so the features are computed during export.',
    url: 'https://github.com/koumajos/ipfixprobe_tsa_sfts',
    linkLabel: 'GitHub'
  }
];
