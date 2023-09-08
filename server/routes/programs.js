import express from "express";
import supabase from "../supabase.js";

const route = express.Router();

//create a program
route.post('/add-program', async(req, res) => {
    try {
        const title = req.body.title;
        const foundName = await supabase
        .from('programs')
        .select('title')
        .eq('title', title);
        if (foundName.data[0] != null){
            res.send("Title already taken.");
        }
        else {
            const desc = req.body.deskripsi;
            const lokasi = req.body.lokasi;
            const tgl = req.body.tgl;
            const target = req.body.target;
            await supabase.from('programs').insert([{ posted_by:req.session.userid,
                title: title,
                deskripsi: desc,
                lokasi: lokasi,
                tanggal_program_mulai: tgl,
                target_partisipan: target }]).select();
            res.send(`Program ${title} has been added.`);
        }
    } catch (error) {
        console.error(error.message);
    }
});

//Read or get all programs
route.get('/', async(req, res) => {
    try {
        const programs = await supabase.from('programs').select('*');
        res.send(programs.data);
    } catch (error) {
        console.error(error.message);
    }
});

//Read or get programs that made by logged in user
route.get('/get-programs', async(req, res) => {
    try {
        const userid = req.session.userid;
        const programs = await supabase.from('programs').select('*').eq('posted_by', userid);
        res.send(programs.data);
    } catch (error) {
        console.error(error.message);
    }
});

//Delete a program
route.delete('/del-program/:id', async(req, res) => {
    try {
        const { id } = req.params;
        await supabase.from('programs').delete().eq('id', id);
        res.send("The program has been deleted.");
    } catch (error) {
        console.error(error.message);
    }
});

//Update a program
route.put('/edit-prog/:progid', async(req, res) => {
    try {
        const { progid } = req.params;

        if(req.body.title) {
            await supabase.from('programs').update({ title: req.body.title }).eq('id', progid).select();
        }
        if(req.body.deskripsi) {
            await supabase.from('programs').update({ deskripsi: req.body.deskripsi }).eq('id', progid).select();
        }
        if(req.body.lokasi) {
            await supabase.from('programs').update({ lokasi: req.body.lokasi }).eq('id', progid).select();
        }
        if(req.body.tgl) {
            await supabase.from('programs').update({ tanggal_program_mulai: req.body.tgl }).eq('id', progid).select();
        }
        if(req.body.target) {
            await supabase.from('programs').update({ target_partisipan: req.body.target }).eq('id', progid).select();
        }
        res.send("the program has been edited.");
    } catch (error) {
        console.error(error.message);
    }
});

export default route;