import express from 'express';
import mysql from 'mysql';

const app = express();


const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'gutao',
  database : 'quemehguths',
  port: 3306
});


app.get('/', async (req, res) => {


    const result = await query();

    console.log(result)
    res.send(result);
})

app.listen(3004, () => console.log('guths lindo'));

function query() {

    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM pau minusculo do pai do caldas', (err, res, fields) => {
            resolve(res);
    })
})
}