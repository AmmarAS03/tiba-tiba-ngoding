import React, { useState, useEffect, useRef } from "react";
import {
    BrowserRouter,
    RouterProvider,
    Route,
    Router,
    json,
    Link,
} from "react-router-dom";

import "./activityPage.css";
import "../../assets/css/typography.css";



function ActivityPage() {
    const [products, setProducts] = useState([]);
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Lihat Semua");
    const [searchInput, setSearchInput] = useState("");
    const inputRef = useRef(null);
    const [selectedLocation, setSelectedLocation] = useState("");

    const dropdownRotation = isDropdownOpen ? "rotate(180deg)" : "none";

    //get all products
    const getProducts = async () => {
        try {
            const data = await fetch("https://tiba-tiba-ngoding.vercel.app/programs/get-allprograms")
                .then((response) => response.json())
                .then((responseData) => {
                    setProducts(responseData);
                    console.log(responseData.foto);
                });
        } catch (error) {
            console.error(error.message);
        }
    };

    const toggleDropdown = () => {
        if (
            !inputRef.current ||
            !inputRef.current.contains(document.activeElement)
        ) {
            setDropdownOpen(!isDropdownOpen);
        }
    };

    const selectOption = (option) => {
        setSelectedLocation(option === "Lihat Semua" ? "" : option);
        setSelectedOption(option);
        setDropdownOpen(false);
    };

    const closeDropdown = (e) => {
        if (!e.target.closest(".dropdown-container") && isDropdownOpen) {
            setDropdownOpen(false);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);


    const options = [
        "Aceh",
        "Bali",
        "Banten",
        "Bengkulu",
        "Daerah Istimewa Yogyakarta",
        "DKI Jakarta",
        "Gorontalo",
        "Jambi",
        "Jawa Barat",
        "Jawa Tengah",
        "Jawa Timur",
        "Kalimantan Barat",
        "Kalimantan Selatan",
        "Kalimantan Tengah",
        "Kalimantan Timur",
        "Kalimantan Utara",
        "Kapulauan Bangka Belitung",
        "Kapulauan Riau",
        "Lampung",
        "Maluku",
        "Maluku Utara",
        "Nusa Tenggara Barat",
        "Nusa Tenggara Timur",
        "Papua",
        "Papua Barat",
        "Papua Barat Daya",
        "Papua Pegunungan",
        "Papua Selatan",
        "Papua Tengah",
        "Riau",
        "Sulawesi Barat",
        "Sulawesi Selatan",
        "Sulawesi Tengah",
        "Sulawesi Tenggara",
        "Sulawesi Utara",
        "Sumatera Barat",
        "Sumatera Selatan",
        "Sumatera Utara",
        "Lihat Semua"
    ];

    return (
        <div className="activity-page">
            <div className='activity-title'>
                <p className="h1">Daftar Kegiatan</p>
            </div>
            <div className="page-header">
                <div className="search-bar">
                    <div class="search-icon">
                        <img src="../../assets/images/Glass.svg" />
                    </div>
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Search"
                        className="search-input"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                    />
                </div>

                <div
                    className="filter-bar"
                    id="dropdownButton"
                    onClick={toggleDropdown}
                >
                    <p className="p1">
                        <span id="selectedLocation">{selectedOption}</span>
                    </p>
                    <img
                        className="filter-icon"
                        style={{ transform: dropdownRotation }}
                        src="client/src/assets/images/Cheveron.svg"
                        alt="Dropdown"
                        id="dropdownIcon"
                    />
                    {isDropdownOpen && (
                        <div className="dropdown-options">
                            {options.map(option => (
                                <p
                                    key={option}
                                    className="dropdown-option"
                                    onClick={() => selectOption(option)}
                                >
                                    {option}
                                </p>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <div class="flex flex-col items-center gap-[20px]">
                {products
                    .filter(
                        (product) =>
                            product.title.toLowerCase().includes(searchInput.toLowerCase()) &&
                            (selectedLocation === "" || product.lokasi === selectedLocation)
                    )
                    .map((product) => (
                        <Link to={`/product/${product.id}`} key={product.id}>
                            <div class="flex w-[900px] p-[30px] [10px] flex-row items-center gap-[20px] rounded-[10px] border border-[0.3px] border-black bg-[var(--Primary---White, #FFF)]">
                                <div class="flex p-[0px] flex-col justify-center items-start gap-[18px] flex-[1px]">
                                    <div class="flex flex-col justify-center items-center self-stretch">
                                        <h4 class="self-stretch text-black font-poppins text-[20px] font-bold leading-[140%]">
                                            {product.title}
                                        </h4>
                                    </div>

                                    <div class="self-stretch text-[var(--Primary, #545F71)] font-poppins text-[12px] font-semibold leading-[140%]">
                                        <p>Target: {product.target_partisipan} relawan</p>
                                        <p>{product.tanggal_program_mulai}</p>
                                        <p>{product.lokasi}</p>
                                    </div>

                                    <div class="flex flex-col justify-center items-center self-stretch">
                                        <div class="h-[38px] self-stretch text-[var(--Primary, #545F71)] font-poppins text-[12px] font-normal leading-[160%]">
                                            {product.deskripsi.length > 150
                                                ? `${product.deskripsi.substring(0, 150)}...`
                                                : product.deskripsi}
                                        </div>
                                    </div>

                                    <div class="flex items-center gap-[40px] self-stretch">
                                        <div class="flex flex-col justify-center items-center flex-1">
                                            <div class="self-stretch text-[var(--Primary, #545F71)] font-poppins text-[12px] font-normal leading-[160%]">
                                                <p>Diunggah oleh: {product.posted_by[0].nama} </p>
                                            </div>
                                        </div>

                                        <div class="flex flex-col justify-center items-center flex-1">
                                            <div class="self-stretch text-[var(--Primary, #545F71)] text-right font-poppins text-12 font-normal leading-[160%]"></div>
                                        </div>
                                    </div>
                                </div>

                                <div class="w-[300px] h-[237px] rounded-[5px]">
                                    <img
                                        src='assets/Trash.png'
                                        alt={`Foto ${product.title}`}
                                        className="w-full h-full rounded-[5px]"
                                    />
                                </div>
                            </div>
                        </Link>
                    ))}
                ;
            </div>
        </div>
    )
}

export default ActivityPage

