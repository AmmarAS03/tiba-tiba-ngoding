import express from "express";
import supabase from "../supabase.js";

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
route.get('/get-joinedprog', async(req, res) => {
    try {
        const userid = req.session.userid;
        const programs = await supabase.from('participants').select('*').eq('userid', userid);
        for(const program of programs.data){
            const participants = await supabase
            .from('programs')
            .select('posted_by, title, deskripsi, lokasi, tanggal_program_mulai, target_partisipan, linkWA, waktu')
            .eq('id', program.progid);
            program['programs'] = participants.data;
        }
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

export default route;