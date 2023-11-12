# Desafio Full Cycle - Docker
O desafio consiste em criar um docker-compose que quando executado realize as 3 sitauções abaixo:

1. Configurar um MySQL com uma tabela de pessoas
2. Configurar uma aplicação node que leia as pessoas no banco de dados MySQL e exiba "FullCycle Rocks!" com a lista de pessoas cadastradas em baixo
3. Configurar um nginx como proxy reverso que receba uma conexão na porta 8080 e disponibilize a aplicação node

## Executar a aplicação
```
docker-compose up -d
```
## Acessar a aplicação
```
http://localhost:8080
```
