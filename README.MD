# Plataforma de Reservas Culturales de Sevilla - Infraestructura Docker

Este repositorio contiene la arquitectura contenerizada para el despliegue de la plataforma de reservas de actividades culturales de Sevilla.

## Arquitectura del Sistema
La arquitectura está formada por tres servicios orquestados con Docker Compose:
- **Nginx (`reservas_web`)**: Servidor web y proxy inverso exponiendo únicamente el puerto `80`.
- **Node.js (`reservas_api`)**: Servicio API ejecutable en Node 20 en la red interna (`puerto 3000`).
- **MySQL (`reservas_db`)**: Base de datos relacional con comprobación de salud (`healthcheck`) y persistencia de datos montada en el volumen `mysql_data`.

## Requisitos
- Docker Desktop instalado y en ejecución.

## Pasos para el Despliegue

1. Clonar el repositorio y acceder a la carpeta:
   ```bash
   git clone https://github.com/adrianlopez25-cmyk/proyecto-reservas.git
   cd proyecto-reservas