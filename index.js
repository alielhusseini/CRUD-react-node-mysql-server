const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'password',
    database: 'employee-system'
});

// run in the workbench:
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
// flush privileges;

const app = express()
app.listen(5000, () => console.log('server running'))
app.use(cors())
app.use(express.json())

app.post('/create', (req, res) => {
    const { name, age, country, position, wage } = req.body

    db.query(
        "INSERT INTO employees (name, age, country, position, wage) VALUES (?,?,?,?,?)", [name, age, country, position, wage],
        (err, result) => {
            if (err) console.log(err)
            else console.log('success')
            res.end()
        }
    )
});
// to create a db go to 'create a new schema to the connected server'