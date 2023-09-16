import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const CreateProgramCard = () => {
    const [title, setTitle] = useState('');
    const [deskripsi, setDeskripsi] = useState('');
    const [lokasi, setLokasi] = useState('');
    const [tgl, setTgl] = useState('');
    const [target, setTarget] = useState('');
    const [linkGroup, setLink] = useState('');
    const navigate = useNavigate();
    const [createFailed, setCreateFailed] = useState(false);



    // TODO: Integrate this function with the backend (DONE)
    const submitButton = async () => {
        try {
            const body = { title, deskripsi, lokasi, tgl, target, linkGroup }
            const response = await fetch("http://localhost:5371/programs/add-program", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            });
            if (response.status == 200) {
                navigate('/dashboard');
            } else {
                setCreateFailed(true);
            }
        } catch (error) {
            console.error(error.message);
            setCreateFailed(true);
        }
    }


    return (
        <div class="flex w-full mt-[82.5px] p-[40px] flex-col justify-center items-center flex-1 self-stretch">
            <div class="flex w-full md:w-[700px] gap-[10px] p-[15px] flex-col justify-between items-center rounded-[15px] bg-[#71825E]">
                <div class="flex h-[60px] px-[18.75px] justify-between items-center flex-shrink-0 self-stretch">
                    <button onClick={() => navigate("/dashboard")}>
                        <img src="assets/Arrow.svg" class="w-[38.981px] h-[30px]" alt="Your Image" />
                    </button>
                    <div class="flex w-full h-[38.25px] flex-col justify-center text-white text-center font-poppins font-bold text-[30px]">
                        Membuat Kegiatan
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
                                    placeholder="Enter Activity Title"
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
                                    placeholder="qissa@ristek.cs.ui.ac.id"
                                    className="flex flex-col items-start w-[270px] h-[37.5px] px-3 flex-shrink-0 gap-[7.5px] rounded-[4.5px] border-[0.75px] border-gray-400 bg-[#FFF]"
                                />
                            </div>
                            <div class="flex flex-col items-start gap-[3.75px]">
                                <span class="text-white font-dm-sans text-[15px] font-semibold leading-normal">Tanggal</span>
                                <input
                                    type="date"
                                    id="date"
                                    value={tgl}
                                    onChange={e => setTgl(e.target.value)}
                                    placeholder="Select Activity Date"
                                    className="flex flex-col justify-center items-start w-[270px] px-3 flex-shrink-0 gap-[7.5px] rounded-[4.5px] border-[0.75px] border-gray-400"
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
                                    placeholder="Enter Participants Target"
                                    className="flex flex-col items-start w-[270px] h-[37.5px] px-3 flex-shrink-0 gap-[7.5px] rounded-[4.5px] border-[0.75px] border-gray-400 bg-[#FFF]"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col h-full justify-start items-center gap-[15px] flex-1 flex-shrink-0 self-stretch">
                        <div class="flex flex-col items-start gap-[3.75px]">
                            <span class="text-white font-dm-sans text-[15px] font-semibold leading-normal">Link Group WhatsApp</span>
                            <input
                                type="text"
                                id="linkGroup"
                                value={linkGroup}
                                onChange={e => setLink(e.target.value)}
                                placeholder="Enter WhatsApp Group Link"
                                className="flex flex-col items-start w-[270px] h-[37.5px] px-3 flex-shrink-0 gap-[7.5px] rounded-[4.5px] border-[0.75px] border-gray-400 bg-[#FFF]"
                            />
                        </div>
                        <div class="flex flex-col items-start gap-[3.75px]">
                            <span class="text-white font-dm-sans text-[15px] font-semibold leading-normal">Deskripsi</span>
                            <textarea
                                type="text"
                                id="description"
                                value={deskripsi}
                                onChange={e => setDeskripsi(e.target.value)}
                                placeholder="Activity's description"
                                className="flex flex-col text-wrap items-start w-[270px] h-[150px] resize-none p-[10px] flex-shrink-0 gap-[7.5px] rounded-[4.5px] border-[0.75px] border-gray-400 bg-[#FFF]"
                            />
                        </div>
                    </div>
                </div>
                <div class="flex px-[18.75px] flex-col justify-center items-center flex-shrink-0 self-stretch">
                    <button
                        onClick={submitButton}
                        class="flex w-[113.014px] h-[49px] p-[8.507px] justify-center items-center rounded-[10px] bg-[#305C7D] custom-button relative transform transition-transform hover:scale-105 active:scale-95"
                    >
                        <div class="w-[98px] h-[33px] flex flex-col justify-center flex-shrink-0 text-white text-center font-poppins text-[14px] font-semibold leading-[140%]">
                            Submit
                        </div>
                    </button>
                    {createFailed && (
                        <div class="justify-center items-center text-[#B30000] font-dm-sans text-sm mt-2">
                            Create program failed. Please check your program form.
                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}

export default CreateProgramCard