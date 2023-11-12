# Desafio Full Cycle - Docker
## Go

O desafio consiste em criar uma imagem GO que quando executada entregue a saída "FullCycle Rocks!". Como desafio adicional, a imagem criada não pode exceder 2Mb.

## Solução aplicada:

1. A partir de uma imagem golang:alpine3.14, Segui os passos do Get Started disponível em https://go.dev/doc/tutorial/getting-started
2. A partir uma imagem scratch copiei os arquivos gerados pelo Get Started para essa solução de produção e chamei a execução do mesmo.

## Executar a imagem diretamente do dockerhub
```
docker run landucci/fullcycle
```

## Puxar a imagem para sua máquina local
```
docker pull landucci/fullcycle:latest
```

## Build da imgem
```
docker build -t landucci/fullcycle:latest .
```

## Executar o container
```
docker run --rm landucci/fullcycle:latest
```