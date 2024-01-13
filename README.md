# CRUD App using ReactJS, NodeJS, ExpressJS and MySQL

- <h2>Prerequisites</h2>
  Make sure you have the following installed: <br>

  - Node.js (v14.0.0 or higher)

  - React (v16.8.0 or higher)

  - MySQL (v5.7 or higher)<br><br>

  Clone the repository:

   ```bash
   git clone https://github.com/your-username/simple-crud.git
   cd simple-crud
 - <h2>About</h2>

    This is a simple CRUD app using ReactJS, NodeJS, ExpressJS and MySQL. <br>
    As this was my learning project I have used MySQL as the Database due to familiarity with this DB more over I have used NodeJS as the backend server.

 - <h2>Implementation</h2>

   1) If you want to run this application on your machine, you need to have ReactJS, NodeJS and MySQL installed on your PC. <br>

   2) After Installing MySQL client and NodeJS, you need to create a database named "db_name" and create a table named "db_name_table" on it. <br>

   3) Then insert some required data like "name", "email", "position" etc (things you want to store in the db via clientSide) in the table. <br>

   4) Make sure to change the "db_name" and "db_name_table" in the "index.js" file. <br>


   ```node
    const db = mysql.createConnection({ 
    user: 'root',
    host: 'localhost',
    password: 'password',
    database: 'DB_NAME',
    }); 
    ```

   5) Install the required dependencies by running `npm install` command. <br>

   6) Run the server by running `npm start/yarn start` command. <br>

- ### Demo Video
  https://www.loom.com/share/17bae782b09844c197df971b717e5303?sid=b55aa837-852c-449c-8d78-633df4d1d02d

- MySQL DB Snippets
  ![image](https://github.com/abhinav0git/simple-crud/assets/103176039/e2d89481-42c4-437e-82e4-071a773de0e3)

