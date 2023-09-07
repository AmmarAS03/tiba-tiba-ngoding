import express from "express";
import bcrypt from "bcrypt";
import supabase from "../supabase.js";

const route = express.Router();

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
        const username = req.body.username;
        const foundName = await supabase.from('users').select('*').eq('username', username);
        //res.send(foundName.data[0]);

        if(foundName.data[0] == null) {
            res.send("Cannot find user.")
        }
        else {
            const valid = await bcrypt.compare(req.body.password, foundName.data[0].password)
            if(valid == true) {
                //save user account to session
                req.session.userid = foundName.data[0].id; 
                res.send("Login successful.")
            }
            else{
                res.send("Password incorrect.")
            }
        }
    } catch (error) {
        console.error(error.message);
    }
});

//logout
route.get('/logout', (req, res) => {
    req.session.userid = null;
    res.send("You have been logged out.");
});

//get user's infos
route.get('/', async(req, res) => {
    const userid = req.session.userid;
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
});

export default route;