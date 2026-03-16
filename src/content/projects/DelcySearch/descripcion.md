---
title: DelcySearch
description: Motor de búsqueda web masivo utilizando Hadoop, Índice Invertido y PageRank
lang: "es"
group: "delcysearch"
cover: "/Media/DelcySearch/delcysearch.png"
url: https://github.com/checho1402/DelcySearch
---

**DelcySearch** es un **prototipo de motor de búsqueda web a gran escala** diseñado para procesar y recuperar información a partir de colecciones masivas de páginas web.

El sistema implementa tecnologías fundamentales utilizadas en motores de búsqueda modernos como:

- Procesamiento de datos distribuido con **Hadoop**
- **Índice Invertido** para una recuperación eficiente de documentos
- **PageRank** para clasificar la importancia de las páginas web
- **Pipelines de rastreo e indexación web a gran escala**

DelcySearch demuestra cómo funcionan internamente las grandes plataformas de búsqueda combinando **computación distribuida, algoritmos de grafos y técnicas de recuperación de información**.


## 🎥 Demostración del Sistema

<p align="center">
<video src="/Media/DelcySearch/showcase.mp4" controls width="700" autoplay loop></video>
</p>

## 🔎 Características Principales

- 🌐 **Indexación masiva de documentos web**
- ⚡ **Búsqueda rápida basada en palabras clave**
- 📊 **Ranking de páginas utilizando el algoritmo PageRank**
- 🗂️ **Construcción distribuida de índices invertidos**
- 🧠 **Procesamiento eficiente de consultas**
- ☁️ **Procesamiento distribuido con Hadoop MapReduce**
- 📈 **Arquitectura escalable para grandes conjuntos de datos**

## ⚙️ Cómo Funciona el Motor de Búsqueda

El sistema sigue una tubería de procesamiento similar a la de los motores de búsqueda modernos:

```
Web Pages Dataset
        │
        ▼
Procesamiento de Datos (Hadoop)
        │
        ▼
Generación de Índice Invertido
        │
        ▼
Cálculo de PageRank
        │
        ▼
Motor de Consultas
        │
        ▼
Resultados Ordenados para el Usuario
```
## Pasos del Procesamiento

1️⃣ Se recopilan grandes conjuntos de datos de páginas web  
2️⃣ Hadoop procesa los documentos en paralelo  
3️⃣ Se genera un **Índice Invertido** para una búsqueda rápida de palabras  
4️⃣ El **algoritmo PageRank** calcula la importancia de cada página  
5️⃣ Las consultas del usuario devuelven resultados ordenados según su relevancia  

## 🏗️ Estructura del Proyecto

```
DelcySearch/
├── crawler/
│   └── scripts para recolectar páginas web
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
│   └── conjuntos de datos web de ejemplo
│
└── README.md
```

## 🧰 Tecnologías Utilizadas

<div class="grid grid-cols-1 md:grid-cols-2 gap-8">

<div>

### Procesamiento de Datos
- Hadoop
- MapReduce
- Computación Distribuida
##
### Algoritmos
- Índice Invertido
- PageRank

</div>

<div>

### Backend
- Python
- Java
##
### Datos
- Grandes conjuntos de datos web
- Procesamiento de texto

</div>

</div>

## 🚀 Primeros Pasos

## 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/checho1402/DelcySearch.git
cd DelcySearch
```

## 2️⃣ Preparar el entorno de Hadoop

Asegúrate de que Hadoop esté instalado y configurado.

## 3️⃣ Ejecutar el trabajo de Índice Invertido

```bash
hadoop jar inverted_index.jar
```

## 4️⃣ Ejecutar el trabajo de PageRank

```bash
hadoop jar pagerank.jar
```

## 5️⃣ Ejecutar consultas de búsqueda

Ejecuta el procesador de consultas para recuperar resultados ordenados.

## 🧠 Conceptos Implementados

DelcySearch demuestra varios conceptos fundamentales en **Recuperación de Información y Sistemas Distribuidos**:

- Procesamiento distribuido de grandes corpus de texto
- Algoritmos de ranking basados en grafos
- Estrategias de indexación para motores de búsqueda
- Pipelines de procesamiento de datos en paralelo

Estos conceptos son fundamentales para **motores de búsqueda a gran escala**.

## 📧 Contacto

- **Email:** slrv.ramosv@gmail.com
- **LinkedIn:** [sergioramosvillena](https://www.linkedin.com/in/sergio-leandro-ramos-villena-45b0bb270/)
- **Teléfono:** +51 932416666

**Hecho con ❤️ por Sergio Ramos | 2024**
