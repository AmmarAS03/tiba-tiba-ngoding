//import dependencies
import express from "express";
import cors from "cors";
import session from "express-session";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
//const path = require('path');
//const dotenv = require('dotenv');
//const mysql = require('mysql');

//import router
import authRouter from "./routes/users.js";
import progsRouter from "./routes/programs.js";
import partiRouter from "./routes/participants.js";

//setup express server
const app = express();
const PORT = 5000; 

//dotenv.config({path:'./config.env'});

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));
app.use(
    session({
      key: "userid",
      secret: "some secret key",
      resave: false,
      saveUninitialized: false,
      cookie: {
        expires: 60*60*24
      }
    })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

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
app.use('/programs', progsRouter);
app.use('/participants', partiRouter);

//test
// app.get('/set-session', (req, res) => {
//     // Menyimpan data ke sesi
//     req.session.username = 'jo';
//     console.log(req.session.id);
//     res.send('Sesi telah disetel');
//   });
  
//   app.get('/get-session', (req, res) => {
//     // Mengakses data dari sesi
//     const username = req.session.username || 'Tidak ada data sesi';
//     console.log(req.session.id);
//     res.send(`Nama pengguna: ${username}`);
//   });
  
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
