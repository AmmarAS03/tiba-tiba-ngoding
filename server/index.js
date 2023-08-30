const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');
const mysql = require('mysql');

dotenv.config({path:'./config.env'});

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
})


app.listen(3600, () => {
    console.log("Server is running on port 3600");
    db.connect( (error) => {
        if (error){
            console.log(error);
        } else{
            console.log("MySQL Connected")
        }
    })
});
