import React from 'react';

import 'portfolio/Hero.css';

export default function Hero() {
    return <>
        <section className='hero'>
            <article className='introduction'>
                <h1>Hsi</h1>
                <h2>Front End Developer</h2>
                <p>I enjoy designing and building things.</p>
            </article>
            <div className='sun'></div> 
            {/* maybe add a loading animation combining the rising of the sun and reveal styffs when it shines */}
            <svg className='mountain' xmlns="http://www.w3.org/2000/svg" viewBox="0 -32 48 32" preserveAspectRatio="none">
                <path d="M 0 0 L 0 -17 L 5 -28 L 8 -32 L 12 -20 L 17 -22 L 18 -19 L 19 -15 L 22 -13 L 25 -13 L 25 -13 L 28 -10 L 31 -12 L 34 -8 L 36 -7 L 39 -11 L 41 -12 L 42 -13 L 45 -7 L 48 -4 L 48 0 L 30 0 L 22 0 Z" fill="currentColor"/>
            </svg>
            {/* I really wanna add some creatures and tiny animatios tho */}
            <div className='links'>
                <button>
                    <i className=''></i>
                    <i className=''></i>
                </button>
            </div>
        </section>
    </>;
}