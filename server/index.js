const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());


//database connection
const db = mysql.createConnection({ 
    user: 'root',
    host: 'localhost',
    password: 'password',
    database: 'employeesys',
});

app.post('/create', (req, res) => {
 const name = req.body.name;
 const email = req.body.email;
 const age = req.body.age;
 const position = req.body.position;
 const ctc = req.body.ctc;
 //console.log(req.body);

// connect to db and log the status
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database:', err);
    } else {
        console.log('Connected to MySQL database');
    }
});

 //db queries
 db.query(
    'INSERT INTO employee (name, email, age, position, ctc) VALUES (?,?,?,?,?)',
    [name, email, age, position, ctc], 
    (err, result) => {                                  //what to do when fxn is executed
        if(err){
            console.log('Error executing SQL query:', err);
            res.status(500).send('Internal Server Error');
        } else {
            res.send('values inserted');
        }
    });
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});

