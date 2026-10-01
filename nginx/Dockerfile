FROM nginx:1.25-alpine

# Copiar configuración personalizada
COPY default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]