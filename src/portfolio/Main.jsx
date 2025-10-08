import React from 'react';

import Hero from 'portfolio/Hero';
import About from 'portfolio/About';
import Projects from 'portfolio/Projects';
import Cat from 'portfolio/Cat';

import 'portfolio/Main.css';
import 'utils/portfolioPalette.css';

export default function Main() {
    return <>
        <main>
            <Hero/>
            <About/>
            <Projects/>
            <Cat/>
        </main>
    </>;
}