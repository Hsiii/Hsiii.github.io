import React, { useEffect, useState } from 'react';

import Cover from 'components/Cover.jsx';
import CubeSection from 'components/CubeSection.jsx';
import BallSection from 'components/BallSection.jsx';
import Menu from 'components/Menu.jsx';
import MusicSection from 'components/MusicSection.jsx';
import DragAndDrop from 'components/DragAndDrop.jsx';

import setLinks from 'utilities/link.jsx';
import 'utilities/colorPalette.css';

import 'components/Home.css';

export default function Home(props) {
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

    const sections = ['cube', 'music', 'ball'];

    return <>
        <main>
            <Cover/>

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
                Cover designed by pikisuperstar / Freepik
            </a>
        </footer>
    </>
}