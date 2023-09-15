import express from "express";
import supabase from "../supabase.js";
import multer from "multer";

const route = express.Router();
const upload = multer();

//create a program
route.post('/add-program', upload.single('foto'), async(req, res) => {
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
            const waktu = req.body.waktu;
            const linkwa = req.body.linkwa;
            const imageBuffer = req.file ? req.file.buffer : null;

            await supabase.from('programs').insert([{ posted_by:req.session.userid,
                title: title,
                deskripsi: desc,
                lokasi: lokasi,
                tanggal_program_mulai: tgl,
                target_partisipan: target,
                waktu: waktu,
                linkWA: linkwa,
                foto: imageBuffer
             }]).select();
            //  console.log(target);
            //console.log(imageBuffer);
            res.send(`Program ${title} has been added.`);
        }
    } catch (error) {
        console.error(error.message);
    }
});

//Read or get all programs
route.get('/get-allprograms', async(req, res) => {
    try {
        const programs = await supabase.from('programs').select('*');
        for(const program of programs.data){
            const posted_by = await supabase.from('users').select('nama').eq('id', program.posted_by);
            program["posted_by"] = posted_by.data;
        }
        //console.log(req.session.userid);
        res.send(programs.data);
    } catch (error) {
        console.error(error.message);
    }
});

//Read or get programs that made by logged in user
route.get('/get-madeprograms', async(req, res) => {
    try {
        const userid = req.session.userid;
        console.log(req.session.userid);
        const programs = await supabase.from('programs').select('title').eq('posted_by', userid);
        res.send(programs.data);
    } catch (error) {
        console.error(error.message);
    }
});

//Read or get programs by name
route.get('/get-programs-byname', async(req, res) => {
    try {
        const name = req.body.name;
        const programs = await supabase.from('programs').select('*').ilike('title', `%${name}%`);
        for(const program of programs.data){
            const posted_by = await supabase.from('users').select('nama').eq('id', program.posted_by);
            program["posted_by"] = posted_by.data;
        }
        res.send(programs.data);
    } catch (error) {
        console.error(error.message);
    }
});

//Read or get programs by location
route.get('/get-programs-byloc', async(req, res) => {
    try {
        const lokasi = req.body.lokasi;
        const programs = await supabase.from('programs').select('*').eq('lokasi', lokasi);
        for(const program of programs.data){
            const posted_by = await supabase.from('users').select('nama').eq('id', program.posted_by);
            program["posted_by"] = posted_by.data;
        }
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

//GET details of a program
route.get('/get-details-program/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const details = await supabase.from('programs').select('*').eq('id', id);
        res.send(details.data);
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

// Endpoint untuk mengambil gambar berdasarkan ID produk
route.get('/api/getImage/:productId', async(req, res) => {
    const productId = req.params.productId;
  
    try {
        const foto = await supabase.from('programs').select('foto').eq('id', productId);
        console.log(foto.data[0].foto);
        const imageBuffer = foto.data[0].foto;
        const imageBase64 = Buffer.from(imageBuffer);

        let imageType = 'jpeg'; // Default to JPEG

        // Detect the actual image type based on its content
        if (imageBuffer[0] === 0x89 && imageBuffer[1] === 0x50 && imageBuffer[2] === 0x4e && imageBuffer[3] === 0x47) {
        // The image is a PNG (PNG files start with 0x89, 0x50, 0x4e, 0x47)
        imageType = 'png';
        } else if (imageBuffer[0] === 0xff && imageBuffer[1] === 0xd8) {
        // The image is a JPEG (JPEG files start with 0xff, 0xd8)
        imageType = 'jpeg';
        } else if (imageBuffer[0] === 0x4a && imageBuffer[1] === 0x46 && imageBuffer[2] === 0x49 && imageBuffer[3] === 0x46) {
        // The image is a JPG (JPG files start with 0x4a, 0x46, 0x49, 0x46)
        imageType = 'jpeg';
        }

        const imageUrl = `data:image/${imageType};base64,${imageBase64}`;
        res.json({ imageUrl });
    } catch (error) {
        console.error(error.message);
    }
  });

export default route;