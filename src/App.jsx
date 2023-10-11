import './App.css'

import { Route, Routes } from "react-router-dom";
import Sidebar from './components/Sidebar';
import Home from "./pages/Home";
import Hiragana from "./pages/Hiragana";
import Test from './pages/Test';

function App() {

  return (
    <>

      <section className="flex gap-6 dark:text-gray-100 dark:bg-slate-900 duration-300">
        <Sidebar />
        <div className="text-xl font-semibold w-screen pr-6">
          <Routes>
            <Route path="/learn-nihon/" element={<Home />} />
            <Route path="/learn-nihon/hiragana" element={<Hiragana />} />
            <Route path="/learn-nihon/test" element={<Test />} />
          </Routes>
        </div>
      </section>
    </>
  )
}

export default App
