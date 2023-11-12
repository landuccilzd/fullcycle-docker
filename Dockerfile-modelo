FROM nginx:latest

#Diretorio da imagem que vou trabalhar
WORKDIR /app

#Executa comandos na imagem
RUN apt-get update && \
    apt-get install vim -y

#Copia arquivos da maquina local para a imagem
COPY html/ /usr/share/nginx/html

#Comando fixo, executa um processo na imagem
ENTRYPOINT [ "/docker-entrypoint.sh" ]

#Comando variável, pode ser alterado via parametro na chamada. Utilizado como parametro para o ENTRYPOINT
CMD [ "nginx", "-g", "daemon off;" ]