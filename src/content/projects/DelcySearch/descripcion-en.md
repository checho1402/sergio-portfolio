---
title: DelcySearch
description: Massive web search engine using Hadoop, Inverted Index and PageRank
lang: "en"
group: "delcysearch"
cover: "/Media/DelcySearch/delcysearch.png"
url: https://github.com/checho1402/DelcySearch
---

**DelcySearch** is a **large-scale web search engine prototype** designed to process and retrieve information from massive collections of web pages.

The system implements fundamental technologies used in modern search engines such as:

- Distributed data processing with **Hadoop**
- **Inverted Index** for efficient document retrieval
- **PageRank** for ranking the importance of web pages
- Large-scale **web crawling and indexing pipelines**

DelcySearch demonstrates how large search platforms work internally by combining **distributed computing, graph algorithms, and information retrieval techniques**.

## 🎥 System Demo

<p align="center">
<video src="/Media/DelcySearch/showcase.mp4" controls width="700" autoplay loop></video>
</p>

## 🔎 Core Features

- 🌐 **Massive web document indexing**
- ⚡ **Fast keyword-based search**
- 📊 **Page ranking using PageRank algorithm**
- 🗂️ **Distributed inverted index construction**
- 🧠 **Efficient query processing**
- ☁️ **Distributed processing with Hadoop MapReduce**
- 📈 **Scalable architecture for large datasets**

## ⚙️ How the Search Engine Works

The system follows a pipeline similar to modern search engines:

```
Web Pages Dataset
        │
        ▼
Data Processing (Hadoop)
        │
        ▼
Inverted Index Generation
        │
        ▼
PageRank Calculation
        │
        ▼
Search Query Engine
        │
        ▼
Ranked Results to the User
```

## Processing Steps

1️⃣ Large datasets of web pages are collected  
2️⃣ Hadoop processes the documents in parallel  
3️⃣ An **Inverted Index** is generated for fast word lookup  
4️⃣ The **PageRank algorithm** computes page importance  
5️⃣ User queries return ranked results based on relevance  

## 🏗️ Project Structure

```
DelcySearch/
├── crawler/
│   └── scripts for collecting web pages
│
├── hadoop_jobs/
│   ├── inverted_index/
│   └── pagerank/
│
├── search_engine/
│   ├── query_processor/
│   └── ranking/
│
├── datasets/
│   └── sample web datasets
│
└── README.md
```

## 🧰 Technologies Used

<div class="grid grid-cols-1 md:grid-cols-2 gap-8">

<div>

### Data Processing
- Hadoop
- MapReduce
- Distributed Computing
##
### Algorithms
- Inverted Index
- PageRank

</div>

<div>

### Backend
- Python
- Java
##
### Data
- Large Web Datasets
- Text Processing

</div>

</div>

## 🚀 Getting Started

## 1️⃣ Clone the repository

```bash
git clone https://github.com/checho1402/DelcySearch.git
cd DelcySearch
```

## 2️⃣ Prepare Hadoop environment

Make sure Hadoop is installed and configured.

## 3️⃣ Run the Inverted Index job

```bash
hadoop jar inverted_index.jar
```

## 4️⃣ Run the PageRank job

```bash
hadoop jar pagerank.jar
```

## 5️⃣ Execute search queries

Run the query processor to retrieve ranked results.

## 🧠 Concepts Implemented

DelcySearch demonstrates several core concepts in **Information Retrieval and Distributed Systems**:

- Distributed processing of large text corpora
- Graph-based ranking algorithms
- Search indexing strategies
- Parallel data processing pipelines

These concepts are fundamental for **large-scale search engines**.

## 📧 Contact

- **Email:** slrv.ramosv@gmail.com
- **LinkedIn:** [sergioramosvillena](https://www.linkedin.com/in/sergio-leandro-ramos-villena-45b0bb270/)
- **Phone:** +51 932416666

**Made with ❤️ by Sergio Ramos | 2024**
