import React from 'react';

import 'portfolio/Hero.css';

export default function Hero() {
    return <>
        <section className='hero'>
            <article className='info'>
                <h1>Hs<span>i<span className='sun'/></span></h1>
                <h2>Front-End Developer</h2>
                <p>I enjoy designing and building things.</p>
            </article>
            <img className='cat' src="images/cat.png" alt="" />
        </section>
    </>;
}