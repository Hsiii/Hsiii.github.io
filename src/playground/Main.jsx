import React, { useEffect, useState } from 'react';

import Cover from 'playground/Cover.jsx';
import CubeSection from 'playground/CubeSection.jsx';
import BallSection from 'playground/BallSection.jsx';
import Menu from 'playground/Menu.jsx';
import MusicSection from 'playground/MusicSection.jsx';

import setLinks from 'utilities/link.jsx';
import 'utilities/colorPalette.css';

import 'playground/Main.css';

export default function Main(props) {
    const [showMusicSection, setShowMusicSection] = useState(true);

    const handleResize = () => 
        setShowMusicSection(
            screen.availWidth == window.outerWidth &&
            screen.availHeight == window.outerHeight
        );

    useEffect(() => {
        setLinks();
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const [sections, setSections] = useState(['cube', 'music', 'ball']);

    useEffect(() => {
        setSections(showMusicSection ? ['cube', 'music', 'ball'] : ['cube', 'ball']);
    }, [showMusicSection])

    return <>
        <main>
            <Cover showMusic={showMusicSection}/>

            <div className='sections'>
                <CubeSection/>
                <MusicSection show={showMusicSection}/>
                {/* <DragAndDrop/> */}
                <BallSection/>

                <div className='menu-container'>
                    <Menu sections={sections}/>
                </div>
            </div>
        </main>
        <footer>
            <a href="http://www.freepik.com">
                Cover image designed by pikisuperstar / Freepik
            </a>
        </footer>
    </>
}