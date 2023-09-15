import express from "express";
import supabase from "../supabase.js";
import jwt from "jsonwebtoken";

const secretKey = 'mysecretkey';
const route = express.Router();

//Create a participant (when user join a program)
route.post('/join-program/:progid', async(req, res) => {
    try {
        const { progid } = req.params;
        const userid = req.session.userid;
        await supabase.from('participants').insert([{ userid: userid,
            progid: progid,
            status: false }]).select();
        res.send("Join successed.");
    } catch (error) {
        console.error(error.message);
    }
});

//Read or get all programs that participated by the logged in user
route.get('/get-joinedprog', authenticateToken, async(req, res) => {
    try {
        const userid = req.user.id;
        const programs = await supabase.from('participants').select('*').eq('userid', userid);
        for(const program of programs.data){
            const participants = await supabase
            .from('programs')
            .select('posted_by, title, deskripsi, lokasi, tanggal_program_mulai, target_partisipan, linkWA, waktu')
            .eq('id', program.progid);
            program['programs'] = participants.data;
        }
        // console.log(programs.data);
        // for(const prog of programs.data){
        //     const posted_by = await supabase.from('users').select('nama').eq('id', prog.programs[0].posted_by);
        //     prog["postedby_nama"] = posted_by.data;
        // }
        res.send(programs.data);
    } catch (error) {
        console.error(error.message);
    }
});

//Delete a participant (when user want to unenroll)
route.delete('/unenroll/:progid', async(req, res) => {
    try {
        const { progid } = req.params;
        const userid = req.session.userid;
        await supabase.from('participants').delete().eq('userid', userid).eq('progid', progid);
        res.send("You unenroll this program successfully.");
    } catch (error) {
        console.error(error.message);
    }
});

//add poin to volunteers
route.get('/addpoint/:userid', async(req, res) => {
    try {
        const { userid } = req.params;
        const oldPoin = await supabase.from('users').select('total_point').eq('id', userid);
        await supabase.from('users').update({total_point: oldPoin.data[0].total_point + 280}).eq('id', userid).select();
        res.send("point berhasil ditambahkan");
    } catch (error) {
        console.error(error.message);
    }
});

//get volunteer who join a program
route.get('/get-volunteers/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const volunteers = await supabase.from('participants').select('userid').eq('progid', id);
        for(const volunteer of volunteers.data){
            const data = await supabase.from('users').select('*').eq('id', volunteer.userid);
            volunteers['data'] = data.data;
        }
        res.send(volunteers.data);
    } catch (error) {
        console.error(error.message);
    }
})

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