import React from 'react';

import Hero from 'components/Hero';
import About from 'components/About';
import Projects from 'components/Projects';
import Cat from 'components/Cat';

import 'components/Main.css';
import 'utils/palette.css';

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