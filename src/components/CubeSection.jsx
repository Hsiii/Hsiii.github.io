import React, { useEffect, useRef } from 'react';

import CubeMenu from 'components/CubeMenu.jsx';

import 'components/CubeSection.css';

export default function CubeSection(props) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting)
                entry.target.classList.add('show');
        });
    }, {rootMargin: '-20%'});

    const title = useRef(null);
    const text = useRef(null);
    useEffect(() => {
        observer.observe(title.current);
        observer.observe(text.current);
    }, [title, text])

    return (
        <section className='cube-section' id='cube_section'>
            <h1 ref={title}>The cube of social media</h1>
            <p ref={text}>A spinning cube sounds fun, and a functional spinning cube sounds even better! Then why not put some colorful social media links on the sides and make it spin by clicking the top? Add some additional effects when it spins super fast is also visualy appealing. Also this is just some random text about this section, using lorem to fill is kinda boring.</p>
            <div className="cube-wrap">
                <CubeMenu/>
            </div>
        </section>
    );
}