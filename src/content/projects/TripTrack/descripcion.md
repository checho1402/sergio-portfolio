---
title: TripTrack - Conéctate, Muévete, Comparte
description: Plataforma de monitoreo y gestión de rutas basada en Traccar
lang: "es"
group: "triptrack"
cover: "/Media/TripTrack/triptrack.png"
url: https://github.com/checho1402/Triptrack
---

**TripTrack** es una plataforma de **monitoreo y seguimiento de dispositivos GPS en tiempo real**, diseñada para visualizar rutas, gestionar dispositivos y analizar trayectorias desde una interfaz web moderna.

El sistema se basa en el software open-source **Traccar**, el cual ha sido extendido y modificado para adaptarse a nuevos casos de uso como:

- Agencias de turismo
- Monitoreo de trabajadores móviles
- Seguimiento logístico
- Control de dispositivos IoT

TripTrack permite **visualizar ubicaciones en tiempo real, analizar rutas recorridas y administrar dispositivos desde un panel web centralizado**.

## 🎥 Demo del Sistema

<p align="center">
    <video src="/Media/TripTrack/platform.mp4" controls width="700" autoplay loop></video>
</p>


## 📡 Características Principales

- 📍 **Seguimiento en tiempo real** de dispositivos GPS
- 🗺️ **Visualización de rutas históricas**
- 👥 **Gestión de múltiples dispositivos**
- ⚠️ **Alertas y eventos personalizados**
- 📊 **Análisis de trayectorias**
- 🧭 **Dashboard interactivo con mapas**
- 🔗 **Integración con bases de datos externas**
- ⚙️ **Arquitectura extensible**

## 📱 Cómo Funciona el Sistema

El sistema utiliza una aplicación móvil que envía la ubicación GPS hacia el servidor.

## Flujo de funcionamiento

```
Dispositivo móvil
│
│ GPS
▼
Traccar Client
│
│ Datos de ubicación
▼
Servidor Traccar
│
▼
TripTrack Backend
│
▼
Dashboard Web (React)
```

1️⃣ El turista o trabajador instala **Traccar Client**  
2️⃣ El teléfono envía su ubicación GPS al servidor  
3️⃣ TripTrack recibe la información  
4️⃣ El administrador visualiza las ubicaciones en el panel web  


## 🧭 Casos de Uso

TripTrack puede utilizarse en diferentes escenarios:
##
### Turismo

- Seguimiento de **grupos turísticos**
- Prevención de **turistas extraviados**
##
### Logística

- Monitoreo de **vehículos de reparto**
- Control de **flotas pequeñas**
##
### Trabajo móvil

- Seguimiento de **vendedores ambulantes**
- Monitoreo de **personal en campo**
##
### IoT

- Dispositivos GPS
- Sensores móviles


## 🏗️ Arquitectura del Proyecto

```

TripTrack/
├── backend/
│ ├── api/
│ ├── services/
│ └── controllers/
│
├── frontend/
│ ├── components/
│ ├── pages/
│ └── styles/
│
├── database/
│ ├── migrations/
│ └── schema.sql
│
├── config/
│
└── README.md

```

## ⚙️ Tecnologías Utilizadas

<div class="grid grid-cols-1 md:grid-cols-2 gap-8">

<div>

### Frontend
- React.js
- JavaScript
- CSS / Tailwind
##
### Backend
- Java 8
- Gradle

</div>

<div>

### Base de datos
- MySQL
- PostgreSQL
##
### Tracking
- Traccar Server
- Traccar Client

</div>

</div>

## 
## 🚀 Instalación

## 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/tuusuario/triptrack.git
cd triptrack
```
## 2️⃣ Instalar dependencias del frontend
```bash
npm install
```
## 3️⃣ Ejecutar el frontend
```bash
npm start
```
## 4️⃣ Ejecutar el backend
```bash
./gradlew run
```

## 🧰 Requisitos del Sistema

Antes de ejecutar TripTrack asegúrate de tener instalado:

- Java 8
- Node.js
- npm
- Gradle / gradlew
- MySQL o PostgreSQL
- Git

Opcional:

- Docker
- Docker Compose

## 📲 Aplicación Móvil Requerida

Para enviar la ubicación GPS es necesario instalar la aplicación:

**Traccar Client**

Disponible en:

Android
https://play.google.com/store/apps/details?id=org.traccar.client

Esta aplicación funciona como un servicio en segundo plano que envía la ubicación en tiempo real al servidor.

## 🗺️ Funcionalidades de Tracking

**TripTrack permite visualizar:**

- 📍 Ubicación actual del dispositivo

- 🧭 Trayectoria histórica

- ⏱️ Tiempo detenido

- ⚠️ Eventos generados

- 📊 Estadísticas de movimiento

## ⚖️ Licencia

Este proyecto está basado en Traccar, distribuido bajo la licencia Apache License 2.0.
Se han realizado modificaciones y extensiones sobre el proyecto original.

Proyecto original:
https://github.com/traccar/traccar

## 📧 Contacto

- **Email:** slrv.ramosv@gmail.com
- **LinkedIn:** [sergioramosvillena](https://www.linkedin.com/in/sergio-leandro-ramos-villena-45b0bb270/)
- **Celular:** +51 3932416666

**Hecho con ❤️ por Sergio Ramos and Cledy Becerra | 2024**

