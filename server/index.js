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

app.get('/employees', (req, res) => {
    db.query("SELECT * FROM employee", (err, result) => {
        if(err){
            console.log('Error executing SQL query (while getting employee list)', err);
        }
        else {
            res.send(result);
        }
    })
})

app.put('/update', (req, res) => {
    const id = req.body.id;
    const ctc = req.body.ctc;
    db.query("UPDATE employee SET ctc = ? WHERE id = ?", [ctc, id], (err, result) => {
        if(err){
            console.log(err);
        }
        else {
            res.send(result);
        }
    });
});

app.delete('/delete/:id', (req,res) => {
    const id = req.params.id;
    db.query("DELETE FROM employee WHERE id =?", [id], (err, result) => {
        if(err){
            console.log(err);
        }
        else {
            res.send(result);
        }
    });                                                                                         
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});

