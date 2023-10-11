// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { useNavigate } from "react-router-dom";

function Hiragana(props) {
    const hiraganas = [
        {
            id: 1,
            name: "A to O",
            details: [
                { romanji: "a", hiragana: "あ", translate: "" },
                { romanji: "i", hiragana: "い", translate: "" },
                { romanji: "u", hiragana: "う", translate: "" },
                { romanji: "e", hiragana: "え", translate: "" },
                { romanji: "o", hiragana: "お", translate: "" },
            ],
        },
        {
            id: 2,
            name: "KA to KO",
            details: [
                { romanji: "ka", hiragana: "か", translate: "" },
                { romanji: "ki", hiragana: "き", translate: "" },
                { romanji: "ku", hiragana: "く", translate: "" },
                { romanji: "ke", hiragana: "け", translate: "" },
                { romanji: "ko", hiragana: "こ", translate: "" },
            ],
        },
        {
            id: 3,
            name: "SA to SO",
            details: [
                { romanji: "sa", hiragana: "さ", translate: "" },
                { romanji: "shi", hiragana: "し", translate: "" },
                { romanji: "su", hiragana: "す", translate: "" },
                { romanji: "se", hiragana: "せ", translate: "" },
                { romanji: "so", hiragana: "そ", translate: "" },
            ],
        },
        {
            id: 4,
            name: "TA to TO",
            details: [
                { romanji: "ta", hiragana: "た", translate: "" },
                { romanji: "chi", hiragana: "ち", translate: "" },
                { romanji: "tsu", hiragana: "つ", translate: "" },
                { romanji: "te", hiragana: "て", translate: "" },
                { romanji: "to", hiragana: "と", translate: "" },
            ],
        },
        {
            id: 5,
            name: "NA to NO",
            details: [
                { romanji: "na", hiragana: "な", translate: "" },
                { romanji: "ni", hiragana: "に", translate: "" },
                { romanji: "nu", hiragana: "ぬ", translate: "" },
                { romanji: "ne", hiragana: "ね", translate: "" },
                { romanji: "no", hiragana: "の", translate: "" },
            ],
        },
        {
            id: 6,
            name: "HA to HO",
            details: [
                { romanji: "ha", hiragana: "は", translate: "" },
                { romanji: "hi", hiragana: "ひ", translate: "" },
                { romanji: "fu", hiragana: "ふ", translate: "" },
                { romanji: "he", hiragana: "へ", translate: "" },
                { romanji: "ho", hiragana: "ほ", translate: "" },
            ],
        },
        {
            id: 7,
            name: "MA to MI",
            details: [
                { romanji: "ma", hiragana: "ま", translate: "" },
                { romanji: "mi", hiragana: "み", translate: "" },
                { romanji: "mu", hiragana: "む", translate: "" },
                { romanji: "me", hiragana: "め", translate: "" },
                { romanji: "mo", hiragana: "も", translate: "" },
            ],
        },
        {
            id: 8,
            name: "YA to YO",
            details: [
                { romanji: "ya", hiragana: "や", translate: "" },
                { romanji: "yu", hiragana: "ゆ", translate: "" },
                { romanji: "yo", hiragana: "よ", translate: "" },
            ],
        },
        {
            id: 9,
            name: "RA to RI",
            details: [
                { romanji: "ra", hiragana: "ら", translate: "" },
                { romanji: "ri", hiragana: "り", translate: "" },
                { romanji: "ru", hiragana: "る", translate: "" },
                { romanji: "re", hiragana: "れ", translate: "" },
                { romanji: "ro", hiragana: "ろ", translate: "" },
            ],
        },
        {
            id: 10,
            name: "WA to N",
            details: [
                { romanji: "wa", hiragana: "わ", translate: "" },
                { romanji: "wo", hiragana: "を", translate: "" },
                { romanji: "n", hiragana: "ん", translate: "" },
            ],
        },
    ];

    const dakuonHandakuonYoon = [
        {
            id: 11,
            name: "Dakuon",
            details: [
                { hiragana: "が", romanji: "ga", translate: "" },
                { hiragana: "ぎ", romanji: "gi", translate: "" },
                { hiragana: "ぐ", romanji: "gu", translate: "" },
                { hiragana: "げ", romanji: "ge", translate: "" },
                { hiragana: "ご", romanji: "go", translate: "" },

                { hiragana: "ざ", romanji: "za", translate: "" },
                { hiragana: "じ", romanji: "zi", translate: "" },
                { hiragana: "ず", romanji: "zu", translate: "" },
                { hiragana: "ぜ", romanji: "ze", translate: "" },
                { hiragana: "ぞ", romanji: "zo", translate: "" },

                { hiragana: "だ", romanji: "da", translate: "" },
                { hiragana: "ぢ", romanji: "dzi", translate: "" },
                { hiragana: "づ", romanji: "dzu", translate: "" },
                { hiragana: "で", romanji: "de", translate: "" },
                { hiragana: "ど", romanji: "do", translate: "" },

                { hiragana: "ば", romanji: "ba", translate: "" },
                { hiragana: "び", romanji: "bi", translate: "" },
                { hiragana: "ぶ", romanji: "bu", translate: "" },
                { hiragana: "べ", romanji: "be", translate: "" },
                { hiragana: "ぼ", romanji: "bo", translate: "" },
            ],
        },
        {
            id: 12,
            name: "Handakuon",
            details: [

                { hiragana: "ぱ", romanji: "pa", translate: "" },
                { hiragana: "ぴ", romanji: "pi", translate: "" },
                { hiragana: "ぷ", romanji: "pu", translate: "" },
                { hiragana: "ぺ", romanji: "pe", translate: "" },
                { hiragana: "ぽ", romanji: "po", translate: "" },
            ],
        },
        {
            id: 13,
            name: "Yoon",
            details: [
                { hiragana: "きゃ", romanji: "kya", translate: "" },
                { hiragana: "きゅ", romanji: "kyu", translate: "" },
                { hiragana: "きょ", romanji: "kyo", translate: "" },

                { hiragana: "しゃ", romanji: "sha", translate: "" },
                { hiragana: "しゅ", romanji: "shu", translate: "" },
                { hiragana: "しょ", romanji: "sho", translate: "" },

                { hiragana: "ちゃ", romanji: "cha", translate: "" },
                { hiragana: "ちゅ", romanji: "chu", translate: "" },
                { hiragana: "ちょ", romanji: "cho", translate: "" },

                { hiragana: "にゃ", romanji: "nya", translate: "" },
                { hiragana: "にゅ", romanji: "nyu", translate: "" },
                { hiragana: "にょ", romanji: "nyo", translate: "" },

                { hiragana: "ひゃ", romanji: "hya", translate: "" },
                { hiragana: "ひゅ", romanji: "hyu", translate: "" },
                { hiragana: "ひょ", romanji: "hyo", translate: "" },

                { hiragana: "みゃ", romanji: "mya", translate: "" },
                { hiragana: "みゅ", romanji: "myu", translate: "" },
                { hiragana: "みょ", romanji: "myo", translate: "" },

                { hiragana: "りゃ", romanji: "rya", translate: "" },
                { hiragana: "りゅ", romanji: "ryu", translate: "" },
                { hiragana: "りょ", romanji: "ryo", translate: "" },

                { hiragana: "ぎゃ", romanji: "gya", translate: "" },
                { hiragana: "ぎゅ", romanji: "gyu", translate: "" },
                { hiragana: "ぎょ", romanji: "gyo", translate: "" },

                { hiragana: "じゃ", romanji: "ja", translate: "" },
                { hiragana: "じゅ", romanji: "ju", translate: "" },
                { hiragana: "じょ", romanji: "jo", translate: "" },

                { hiragana: "びゃ", romanji: "bya", translate: "" },
                { hiragana: "びゅ", romanji: "byu", translate: "" },
                { hiragana: "びょ", romanji: "byo", translate: "" },

                { hiragana: "ぴゃ", romanji: "pya", translate: "" },
                { hiragana: "ぴゅ", romanji: "pyu", translate: "" },
                { hiragana: "ぴょ", romanji: "pyo", translate: "" },
            ],
        },
    ]

    const navigate = useNavigate();

    const hiraganaTest = (charset) => {
        navigate("/learn-nihon/test", { state: charset });
    };

    return (
        <>
            <div className=" max-h-screen min-h-screen overflow-scroll">
                <h6 className="flex justify-center text-3xl">
                    Hiragana Table
                </h6>
                <div className="flex flex-col justify-around max-h-screen pt-10 lg:flex-row ">
                    <div className="mb-10" id="gojuon">
                        <h6 className="">Gojūon ( 五十音 )</h6>
                        <div className="flex justify-center items-start max-h-[25rem] overflow-scroll border-b-2 border-t-2">
                            <div className="flex-1 max-w-5xl p-8 pt-10">
                                {hiraganas.map((charset) => {
                                    return (
                                        <div className="text-sm pb-5" key={charset.id}>
                                            <h6 className="text-sm text-center mb-5 lg:text-2xl">{charset.name}</h6>
                                            <div className="flex flex-row justify-center items-center mb-5">
                                                <div className="flex flex-row flex-wrap gap-3 w-fit justify-center">
                                                    {charset.details.map((character) => (
                                                        <div
                                                            className="p-5 bg-slate-300 dark:bg-slate-700 border-1 border-transparent rounded-md shadow-md space-y-2 flex flex-col items-center"
                                                            key={character.romanji}
                                                        >
                                                            <h6 className="text-lg sm:text-lg lg:text-3xl font-semibold">
                                                                {character.hiragana}
                                                            </h6>
                                                            <h6 className="text-xs sm:text-xs uppercase">
                                                                {character.romanji}
                                                            </h6>
                                                        </div>
                                                    ))}
                                                    <button
                                                        onClick={() => {
                                                            hiraganaTest(charset);
                                                        }}
                                                        className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-full shadow-2xl group h-24 w-14">
                                                        <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
                                                        <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                                                            <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                                                            <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
                                                        </span>
                                                        <span className="relative text-white">Test</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="" id="dakuonHandakuonYoon">
                        <h6>Dakuon ( 濁音 ), Handakuon ( 半濁音 ) & Yōon ( 拗音 )</h6>
                        <div className="flex justify-center items-start max-h-[25rem] overflow-scroll border-b-2 border-t-2">
                            <div className="flex-1 max-w-5xl p-8 pt-10">
                                {dakuonHandakuonYoon.map((charset) => {
                                    return (
                                        <div className="text-sm pb-5" key={charset.id}>
                                            <h6 className="text-sm text-center mb-5 lg:text-2xl">{charset.name}</h6>
                                            <div className="flex flex-row justify-center items-center mb-5">
                                                <div className="flex flex-row flex-wrap gap-3 w-fit justify-center">
                                                    {charset.details.map((character) => (
                                                        <div
                                                            className="p-5 bg-slate-300 dark:bg-slate-700 border-1 border-transparent rounded-md shadow-md space-y-2 flex flex-col items-center"
                                                            key={character.romanji}
                                                        >
                                                            <h6 className="text-lg sm:text-lg lg:text-3xl font-semibold">
                                                                {character.hiragana}
                                                            </h6>
                                                            <h6 className="text-xs sm:text-xs uppercase">
                                                                {character.romanji}
                                                            </h6>
                                                        </div>
                                                    ))}
                                                    <button
                                                        onClick={() => {
                                                            hiraganaTest(charset);
                                                        }}
                                                        className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-full shadow-2xl group h-24 w-14">
                                                        <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
                                                        <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                                                            <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                                                            <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
                                                        </span>
                                                        <span className="relative text-white">Test</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hiragana;
