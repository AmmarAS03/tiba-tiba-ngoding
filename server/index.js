//import dependencies
import express from "express";
import cors from "cors";
import session from "express-session";
//const path = require('path');
//const dotenv = require('dotenv');
//const mysql = require('mysql');

//import router
import authRouter from "./routes/users.js";

//setup express server
const app = express();
const PORT = 5000;

//dotenv.config({path:'./config.env'});

app.use(express.json());
app.use(cors());
app.use(
    session({
      secret: "some secret key",
      resave: false,
      saveUninitialized: false,
    })
);

// const db = mysql.createConnection({
//     host: process.env.DATABASE_HOST,
//     port: process.env.DATABASE_PORT,
//     user: process.env.DATABASE_USER,
//     password: process.env.DATABASE_PASSWORD,
//     database: process.env.DATABASE
// })

//routing
app.get('/', (req,res) => {
    res.send('berhasil!');
});
app.use('/users', authRouter);

app.listen(PORT, () => {
    console.log(`Server running on port: http://localhost:${PORT}`);
    // db.connect( (error) => {
    //     if (error){
    //         console.log(error);
    //     } else{
    //         console.log("MySQL Connected")
    //     }
    // })
});
