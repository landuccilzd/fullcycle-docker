const express = require('express')
const mysql = require('mysql')

const app = express()

const port = 3000
const config = {
    host: 'mysql',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

app.get('/', (req, res) => {
    const connection = mysql.createConnection(config)
    buscarNomes(res, connection)
    connection.end()
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})

function buscarNomes(res, connection) {
    const sql = 'select * from pessoa';

    connection.query(sql, (error, results, fields) => {

        let saida = ''
        for (let pessoa of results) {
            saida += `${pessoa.id} - ${pessoa.nome}<br />`
        }

        res.send("<h1>FullCycle Rocks!</h1><h3>Pessoas cadastradas:</h3>" + saida)
    })
}