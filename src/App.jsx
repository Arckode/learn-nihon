import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Route, Routes } from "react-router-dom";
import Sidebar from './components/Sidebar';
import Home from "./pages/Home";
import Hiragana from "./pages/Hiragana";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

      <section className="flex gap-6 dark:text-gray-100 dark:bg-slate-900 duration-300">
        <Sidebar />
        <div className="text-xl font-semibold w-screen">
          <Routes>
            <Route path="/learn-nihon/" element={<Home />} />
            <Route path="/learn-nihon/hiragana" element={<Hiragana />} />
            {/* <Route path="/katakana" element={<Katakana />} />
            <Route path="/hiraganaTest" element={<HiraganaTest />} />
            <Route path="/katakanaTest" element={<KatakanaTest />} /> */}
          </Routes>
        </div>
      </section>
    </>
  )
}

export default App
