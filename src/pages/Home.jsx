// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function Home() {

    const streak = localStorage.getItem('streak');

    return (
        <>
            <div>
                Home <br></br>
                Current streak is at {streak}! Keep it up!
            </div>
        </>
    )
}

export default Home
