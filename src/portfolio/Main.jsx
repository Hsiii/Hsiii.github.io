import React from 'react';

import Hero from 'portfolio/Hero';
import About from 'portfolio/About';
import Projects from 'portfolio/Projects';

import 'portfolio/Main.css';
import 'utilities/colorPalette_pf.css';

export default function Main() {
    return <>
        <main>
            <Hero/>
            <About/>
            <Projects/>
        </main>
    </>;
}