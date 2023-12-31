import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const EditProgramCard = () => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [deskripsi, setDeskripsi] = useState('');
    const [lokasi, setLokasi] = useState('');
    const [tgl, setTgl] = useState('');
    const [target, setTarget] = useState('');
    const [linkGroup, setLink] = useState('');
    const navigate = useNavigate();



    // TODO: Integrate this function with the backend (DONE)
    const submitButton = async (e) => {
        try {
            const body = { title, deskripsi, lokasi, tgl, target, linkGroup }
            const response = await fetch(`https://tiba-tiba-ngoding.vercel.app/programs/edit-prog/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            console.log(response);
        } catch (error) {
            console.error(error.message);
        }
    }

    const getProduct = async(e) => {
        try {
            const detail = await fetch(`https://tiba-tiba-ngoding.vercel.app/programs/get-details-program/${id}`);
            const detailJson = await detail.json();
            setTitle(detailJson[0].title);
            setDeskripsi(detailJson[0].deskripsi);
            setLokasi(detailJson[0].lokasi);
            setTgl(detailJson[0].tanggal_program_mulai);
            setTarget(detailJson[0].target_partisipan);
            setLink(detailJson[0].linkWA);
        } catch (error) {
            console.error(error.message);
        }
    }
    useEffect(() => {
        getProduct();
    }, []);


    return (
        <div class="flex w-full mt-[82.5px] p-[40px] flex-col justify-center items-center flex-1 self-stretch">
            <div class="flex w-full md:w-[700px] p-[15px] flex-col justify-between items-center rounded-[15px] bg-[#71825E]">
                <div class="flex h-[60px] px-[18.75px] justify-between items-center flex-shrink-0 self-stretch">
                <button onClick={() => navigate("/dashboard")}>
                    <img src="assets/Arrow.svg" class="w-[38.981px] h-[30px]" alt="Your Image" />
                    </button>
                    <div class="flex w-full h-[38.25px] flex-col justify-center text-white text-center font-poppins font-bold text-[30px]">
                        Edit Kegiatan
                    </div>
                
                    <img src="assets/Arrow.svg" class="w-[38.981px] h-[30px] opacity-0" alt="Your Image" />


                </div>
                <div class="flex flex-col md:flex-row px-[60px] gap-[15px] justify-between items-center self-stretch">
                    <div class="flex flex-col justify-center items-center gap-[15px] flex-1 flex-shrink-0 self-stretch">
                        <div class="flex flex-col items-start gap-[15px]">
                            <div class="flex flex-col items-start gap-[3.75px]">
                                <span class="text-white font-dm-sans text-[15px] font-semibold leading-normal">Nama Kegiatan</span>
                                <input
                                    type="text"
                                    id="activity"
                                    value={title}
                                    onChange={e => setTitle(e.target.value)}
                                    placeholder={title}
                                    className="flex flex-col items-start w-[270px] h-[37.5px] px-3 flex-shrink-0 gap-[7.5px] rounded-[4.5px] border-[0.75px] border-gray-400 bg-[#FFF]"
                                />
                            </div>
                            <div class="flex flex-col items-start gap-[3.75px]">
                                <span class="text-white font-dm-sans text-[15px] font-semibold leading-normal">Wilayah</span>
                                <input
                                    type="text"
                                    id="region"
                                    value={lokasi}
                                    onChange={e => setLokasi(e.target.value)}
                                    placeholder={lokasi}
                                    className="flex flex-col items-start w-[270px] h-[37.5px] px-3 flex-shrink-0 gap-[7.5px] rounded-[4.5px] border-[0.75px] border-gray-400 bg-[#FFF]"
                                />
                            </div>
                            <div class="flex flex-col items-start gap-[3.75px]">
                                <span class="text-white font-dm-sans text-[15px] font-semibold leading-normal">Tanggal</span>
                                <input
                                    type="text"
                                    id="date"
                                    value={tgl}
                                    onChange={e => setTgl(e.target.value)}
                                    placeholder={tgl}
                                    className="flex flex-col items-start w-[270px] h-[37.5px] px-3 flex-shrink-0 gap-[7.5px] rounded-[4.5px] border-[0.75px] border-gray-400 bg-[#FFF]"
                                />
                            </div>
                            {/* <div class="flex flex-col items-start gap-[3.75px]">
                                <span class="text-white font-dm-sans text-[15px] font-semibold leading-normal">Waktu</span>
                                <input
                                    type="text"
                                    id="time"
                                    value={time}
                                    onChange={handleTime}
                                    placeholder="qissa@ristek.cs.ui.ac.id"
                                    className="flex flex-col items-start w-[270px] h-[37.5px] px-3 flex-shrink-0 gap-[7.5px] rounded-[4.5px] border-[0.75px] border-gray-400 bg-[#FFF]"
                                />
                            </div> */}
                            <div class="flex flex-col items-start gap-[3.75px]">
                                <span class="text-white font-dm-sans text-[15px] font-semibold leading-normal">Target Partisipasi</span>
                                <input
                                    type="text"
                                    id="participant"
                                    value={target}
                                    onChange={e => setTarget(e.target.value)}
                                    placeholder={target}
                                    className="flex flex-col items-start w-[270px] h-[37.5px] px-3 flex-shrink-0 gap-[7.5px] rounded-[4.5px] border-[0.75px] border-gray-400 bg-[#FFF]"
                                />
                            </div>
                            <div class="flex flex-col items-start gap-[3.75px]">
                                <span class="text-white font-dm-sans text-[15px] font-semibold leading-normal">Link Group WhatsApp</span>
                                <input
                                    type="text"
                                    id="linkGroup"
                                    value={linkGroup}
                                    onChange={e => setLink(e.target.value)}
                                    placeholder={linkGroup}
                                    className="flex flex-col items-start w-[270px] h-[37.5px] px-3 flex-shrink-0 gap-[7.5px] rounded-[4.5px] border-[0.75px] border-gray-400 bg-[#FFF]"
                                />
                            </div>
                        </div>
                        <button onClick={submitButton} class="flex w-[113.014px] h-[49px] p-[8.507px] justify-center items-center rounded-[10px] bg-[#305C7D]">
                            <div class="w-[98px] h-[33px] flex flex-col justify-center flex-shrink-0 text-white text-center font-poppins text-[14px] font-semibold leading-[140%]">
                                Submit
                            </div>
                        </button>
                    </div>
                    <div class="flex flex-col h-full justify-start items-center gap-[15px] flex-1 flex-shrink-0 self-stretch">
                        <div class="flex flex-col items-start gap-[3.75px]">
                            <span class="text-white font-dm-sans text-[15px] font-semibold leading-normal">Deskripsi</span>
                            <textarea
                                type="text"
                                id="description"
                                value={deskripsi}
                                onChange={e => setDeskripsi(e.target.value)}
                                placeholder={deskripsi}
                                className="flex flex-col text-wrap items-start w-[270px] h-[150px] resize-none px-[3px] flex-shrink-0 gap-[7.5px] rounded-[4.5px] border-[0.75px] border-gray-400 bg-[#FFF]"
                            />
                        </div>
                        {/* <div class="flex flex-col items-start gap-[3.75px]">
                            <span class="text-white font-dm-sans text-[15px] font-semibold leading-normal">Photo</span>
                            <input
                                type="file"
                                id="description"
                                accept=".png, .jpg, .jpeg"
                                value={''}
                                onChange={''}
                                placeholder="Activity's description"
                                className="flex flex-col text-wrap items-start w-[270px] text-white font-semibold justify-between flex-shrink-0 gap-[7.5px] rounded-[4.5px]"
                            />
                        </div> */}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default EditProgramCard