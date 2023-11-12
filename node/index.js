const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = `insert into people(name) values ('Cris')`
//connection.query(sql)
//connection.end()

app.get('/', (req, res) => {
    res.send("<h1>Node sem node!</h1><p>Alteração</p>")
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})