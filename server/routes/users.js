import express, { Router } from "express";
import bcrypt from "bcrypt";
import supabase from "../supabase.js";
import jwt from "jsonwebtoken";

const route = express.Router();
const secretKey = 'mysecretkey';

//create user (register)
route.post('/register', async(req, res) => {
    try {
        const username = req.body.username;
        const foundName = await supabase.from('users').select('username').eq('username', username);
        //res.send(foundName.data[0]);

        if (foundName.data[0] != null) {
            res.send("Username already taken.");
        }
        else {
            const password = req.body.password;
            const salt = await bcrypt.genSalt();
            const finalPass = await bcrypt.hash(password, salt);
            await supabase.from('users').insert([{ email: req.body.email, 
                username: username, 
                password: finalPass,
                nama: req.body.nama, 
                lokasi: req.body.lokasi, 
                notelp: req.body.notelp, 
                instagram: req.body.ig}]).select();
            res.send("Register successed.");
        }
    } catch (error) {
        console.error(error.message);
    }
});

//login
route.post('/login', async(req, res) => {
    try {
        const email = req.body.email;
        
        const foundName = await supabase.from('users').select('*').eq('email', email);

        if(foundName.data[0] == null) {
            res.send("Cannot find user.")
            return res.status(401).json({ error: "User not found." });
        }
        else {
            if (email !== '' || req.body.password !== ''){
                const valid = await bcrypt.compare(req.body.password, foundName.data[0].password);
            if(valid == true) {
                //save user account to session
                const token = jwt.sign(foundName.data[0], secretKey);
                res.json({ token: token});
                return res.status(200).json({ token: token });
                // req.session.userid = foundName.data[0].id; 
                // console.log(req.session.id);
                //console.log(token);
                // res.send(foundName.data[0].id);
            }
            else{
                res.send("Password incorrect.")
                // return res.status(401).json({ error: "Password incorrect." });
            }

            }
            
        }
    } catch (error) {
        console.error(error.message);
        // return res.status(500).json({ error: "Internal server error." });
    }
});

//logout
route.get('/logout', (req, res) => {
    req.session.userid = null;
    res.send("You have been logged out.");
});

//get user's infos
route.get('/', authenticateToken, async(req, res) => {
    try {
        //console.log("masuk1");
        const userid = req.user.id;
        // console.log(req.session.id);
        // console.log(userid);
        // console.log("masuk2");
        const infos = await supabase
        .from('users')
        .select('*')
        .eq('id', userid);
        const total_program = await supabase
        .from('program')
        .select('title')
        .eq('posted_by', userid);
        if (total_program.data == null) {
            infos.data[0]['total_program'] = 0;
        }
        else {
            infos.data[0]['total_program'] = `${total_program.data.length}`;
        }
        res.send(infos.data[0]);
    } catch (error) {
        console.error(error.message);
    }
});

route.get('/leaderboard', async (req, res) => {
    const leaderboard = await supabase
        .from('users')
        .select('nama, lokasi, total_point')
        .order('total_point', { ascending: false })
        .limit(10); 


    res.send(leaderboard.data); // Send the data as JSON response
});


function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) {
        return res.send("Token tidak valid.")
    }
    else {
        jwt.verify(token, secretKey, (error, user) => {
            if (error){
                return res.send("Token sudah expired.")
            }
            else{
                req.user = user
                next()
            }
        })
    }
};

export default route;