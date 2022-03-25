import React from 'react';
import Home from './pages/Home'
import About from './pages/About'
import Technical from './pages/WorkHistoryList'
import './index.css'

export default function App() {
    return(
        <div>
            <Home />
            <About />
            <Technical />
        </div>
    )
}