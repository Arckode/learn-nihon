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
                { romanji: "が", hiragana: "ga", translate: "" },
                { romanji: "ぎ", hiragana: "gi", translate: "" },
                { romanji: "ぐ", hiragana: "gu", translate: "" },
                { romanji: "げ", hiragana: "ge", translate: "" },
                { romanji: "ご", hiragana: "go", translate: "" },

                { romanji: "ざ", hiragana: "za", translate: "" },
                { romanji: "じ", hiragana: "ji", translate: "" },
                { romanji: "ず", hiragana: "zu", translate: "" },
                { romanji: "ぜ", hiragana: "ze", translate: "" },
                { romanji: "ぞ", hiragana: "zo", translate: "" },

                { romanji: "だ", hiragana: "da", translate: "" },
                { romanji: "ぢ", hiragana: "ji", translate: "" },
                { romanji: "づ", hiragana: "zu", translate: "" },
                { romanji: "で", hiragana: "de", translate: "" },
                { romanji: "ど", hiragana: "do", translate: "" },

                { romanji: "ば", hiragana: "ba", translate: "" },
                { romanji: "び", hiragana: "bi", translate: "" },
                { romanji: "ぶ", hiragana: "bu", translate: "" },
                { romanji: "べ", hiragana: "be", translate: "" },
                { romanji: "ぼ", hiragana: "bo", translate: "" },
            ],
        },
        {
            id: 12,
            name: "Handakuon",
            details: [

                { romanji: "ぱ", hiragana: "pa", translate: "" },
                { romanji: "ぴ", hiragana: "pi", translate: "" },
                { romanji: "ぷ", hiragana: "pu", translate: "" },
                { romanji: "ぺ", hiragana: "pe", translate: "" },
                { romanji: "ぽ", hiragana: "po", translate: "" },
            ],
        },
        {
            id: 13,
            name: "Yoon",
            details: [
                { romanji: "きゃ", hiragana: "kya", translate: "" },
                { romanji: "きゅ", hiragana: "kyu", translate: "" },
                { romanji: "きょ", hiragana: "kyo", translate: "" },

                { romanji: "しゃ", hiragana: "sha", translate: "" },
                { romanji: "しゅ", hiragana: "shu", translate: "" },
                { romanji: "しょ", hiragana: "sho", translate: "" },

                { romanji: "ちゃ", hiragana: "cha", translate: "" },
                { romanji: "ちゅ", hiragana: "chu", translate: "" },
                { romanji: "ちょ", hiragana: "cho", translate: "" },

                { romanji: "にゃ", hiragana: "nya", translate: "" },
                { romanji: "にゅ", hiragana: "nyu", translate: "" },
                { romanji: "にょ", hiragana: "nyo", translate: "" },

                { romanji: "ひゃ", hiragana: "hya", translate: "" },
                { romanji: "ひゅ", hiragana: "hyu", translate: "" },
                { romanji: "ひょ", hiragana: "hyo", translate: "" },

                { romanji: "みゃ", hiragana: "mya", translate: "" },
                { romanji: "みゅ", hiragana: "myu", translate: "" },
                { romanji: "みょ", hiragana: "myo", translate: "" },

                { romanji: "りゃ", hiragana: "rya", translate: "" },
                { romanji: "りゅ", hiragana: "ryu", translate: "" },
                { romanji: "りょ", hiragana: "ryo", translate: "" },

                { romanji: "ぎゃ", hiragana: "gya", translate: "" },
                { romanji: "ぎゅ", hiragana: "gyu", translate: "" },
                { romanji: "ぎょ", hiragana: "gyo", translate: "" },

                { romanji: "じゃ", hiragana: "ja", translate: "" },
                { romanji: "じゅ", hiragana: "ju", translate: "" },
                { romanji: "じょ", hiragana: "jo", translate: "" },

                { romanji: "びゃ", hiragana: "bya", translate: "" },
                { romanji: "びゅ", hiragana: "byu", translate: "" },
                { romanji: "びょ", hiragana: "byo", translate: "" },

                { romanji: "ぴゃ", hiragana: "pya", translate: "" },
                { romanji: "ぴゅ", hiragana: "pyu", translate: "" },
                { romanji: "ぴょ", hiragana: "pyo", translate: "" },
            ],
        },
    ]

    // const navigate = useNavigate();

    // const hiraganaTest = (hiragana) => {
    //     navigate("/hiraganaTest", { state: hiragana });
    // };

    return (
        <>
            <div className=" max-h-screen">
                <h6 className="flex justify-center pt-20 pb-14 text-4xl">
                    Hiragana Table
                </h6>
                <div className="flex justify-center items-start max-h-[25rem] overflow-scroll">
                    {/* Hiragana */}
                    <div className="flex-1 max-w-5xl p-16 pt-0">
                        {hiraganas.map((hiragana) => {
                            return (
                                <div className="text-sm pb-5" key={hiragana.id}>
                                    <h6 className="text-center pb-3">{hiragana.name}</h6>
                                    <div className="flex flex-row justify-center items-center pb-5">
                                        <div className="flex flex-row flex-wrap gap-3 w-fit justify-center">
                                            {hiragana.details.map((character) => (
                                                <div
                                                    className="p-5 bg-white dark:bg-slate-700 border-1-8 border-transparent rounded-md shadow-md space-y-2 flex flex-col items-center"
                                                    key={character.romanji}
                                                >
                                                    <h6 className="text-3xl font-semibold">
                                                        {character.hiragana}
                                                    </h6>
                                                    <p className="text-xs uppercase">
                                                        {character.romanji}
                                                    </p>
                                                </div>
                                            ))}
                                            <button
                                                // onClick={() => {
                                                //     hiraganaTest(hiragana);
                                                // }} 
                                                className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
                                                <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
                                                <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                                                    <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                                                    <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
                                                </span>
                                                <span className="relative text-white">Test</span>
                                            </button>
                                        </div>
                                        {/* <a className="p-5 pl-10"
                      onClick={() => {
                        hiraganaTest(hiragana);
                      }}
                    >
                      <button>Test</button>
                    </a> */}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hiragana;
