import { useState, useEffect, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";

import { useLocation, Link } from "react-router-dom";

function Test() {
    const effectRan = useRef(false)
    const location = useLocation();
    const charset = location.state.details;

    const [input, setInput] = useState("");
    const [current, setCurrent] = useState(0);

    const [streak, setStreak] = useState(0);
    const [maxStreak, setMaxStreak] = useState(0);

    const [error, setError] = useState(false);
    const [correct, setCorrect] = useState(false)
    const [isDisabled, setIsDisabled] = useState(false);
    const [isShown, setIsShown] = useState(false);

    const setRandomHiragana = () => {
        const randomIndex = Math.floor(Math.random() * charset.length);
        setCurrent(randomIndex);
    };

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsDisabled(!isDisabled)
        if (input.toLocaleLowerCase() === charset[current].romanji) {
            setStreak(streak + 1)
            setMaxStreak(Math.max(streak + 1, maxStreak))
            setError(false)
            setIsShown(true)
            setCorrect(`Nice, Keep It Up!`)

            localStorage.setItem('maxStreak', Math.max(streak, maxStreak))
            localStorage.setItem('streak', streak + 1)
        } else {
            setStreak(0)
            setError(`Wrong! The correct answer for ${charset[current].hiragana} is ${charset[current].romanji}`)
            setCorrect(false)
            setIsShown(true)
            localStorage.setItem('streak', 0)
        }

    };

    const nextHiragana = () => {
        setInput('')
        setRandomHiragana()
        setIsDisabled(!isDisabled)
        setIsShown(false)
    }

    const addHiragana = () => {
        if (location.state.id == 1) {
            charset.push(
                { romanji: "ai", hiragana: "あい", translate: "Love" },
                { romanji: "ao", hiragana: "あお", translate: "Blue" },
                { romanji: "ue", hiragana: "うえ", translate: "Top, Upper" },
                { romanji: "iie", hiragana: "いいえ", translate: "no" },
            );
        }
        else if (location.state.id == 2) {
            charset.push(
                { romanji: "koukou", hiragana: "こうこう", translate: "High School" },
                { romanji: "kuukou", hiragana: "くうこう", translate: "Airport" },
            )
        }
    }

    useEffect(() => {
        if (effectRan.current === false) {
            addHiragana()
            setRandomHiragana()
            setStreak(parseInt(localStorage.getItem('streak')) || 0)
            setMaxStreak(parseInt(localStorage.getItem('maxStreak')) || 0)

            return () => {
                effectRan.current = true
            }
        }
    }, []);
    return (
        <>
            <div className="min-h-screen max-h-screen">
                <div className="p-5 flex justify-end">
                    <Link to={'/learn-nihon/hiragana'}><AiOutlineClose /></Link>
                </div>
                <div className="text-center flex flex-col justify-center">
                    <header className="p-6 mb-8">
                        <h1 className="text-4xl font-bold uppercase">Hiragana Quiz</h1>
                        <div>
                            <p>
                                Streak {streak}, Keep It Up!
                            </p>
                        </div>
                    </header>

                    <div className="text-9xl font-bold mb-8">
                        <p>{charset[current].hiragana}</p>
                    </div>

                    <div className="mb-8">
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                disabled={isDisabled}
                                onChange={handleChange}
                                value={input}
                                className="block w-24 bg-transparent border-b-2 border-b-black dark:border-b-white mx-auto outline-none text-center text-6xl pb-2 mb-5"
                            />
                            {!isShown && <button disabled={!input} type="submit" className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden tracking-tighter text-white bg-gray-800 rounded-lg group">
                                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
                                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                                <span className="relative">Submit</span>
                            </button>}
                        </form>
                    </div>
                    {(error && isShown) && <p className="text-red-500 text-center mb-5">{error}</p>}
                    {(correct && isShown) && <p className="text-green-500 text-center mb-5">{correct}</p>}

                    <div className="mb-8">
                        {((error || correct) && isShown) && <button className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-blue-800 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group" onClick={nextHiragana}>
                            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-blue-800 group-hover:h-full"></span>
                            <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Gimme Next!</span>
                        </button>}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Test;
