import React from 'react';
import Home from './pages/Home'
import About from './pages/About'
import WorkHistory from './pages/Work'
import Skills from './pages/TechnicalSkills'
import './index.css'

export default function App() {
    return(
        <div>
            <Home />
            <About />
            <WorkHistory />
            <Skills />
        </div>
    )
}