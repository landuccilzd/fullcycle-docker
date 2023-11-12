FROM golang:alpine3.14 as builder

WORKDIR /usr/app

COPY . .

RUN go build -o /hello hello.go

RUN [ "go", "run", "." ]