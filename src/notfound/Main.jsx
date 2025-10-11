import React from 'react';

import 'utils/portfolioPalette.css';

import 'notfound/Main.css';

export default function Main() {
    return <>
        <main className='notfound'> 
            <h1>404</h1>
            <h2>this page could not be found.</h2>
            {/* <p>Maybe you should <a href='https://hsiii.github.io/pages/portfolio/'>check out my portfolio</a> instead.</p> */}
            <p>Maybe you should <a href='https://hsiii.github.io'>check out my other pages</a> instead.</p>
        </main>
    </>
}