const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = `INSERT INTO people(name) values('Thais')`
connection.query(sql)

const getName = 'SELECT * FROM people LIMIT 1'

console.log(connection.query(getName))
connection.end()

app.get('/', (req,res) => {
    res.send('<h1>Full Cycle</h1>')
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})


