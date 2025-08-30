import React, { useEffect } from 'react';

import Cover from 'playground/CoverOnlyLinks.jsx';

import setLinks from 'utilities/link.jsx';
import 'utilities/colorPalette.css';

import 'playground/HomePage.css';

export default function HomePage(props) {
    useEffect(() => {
        setLinks();
    }, []);

    return <>
        <main>
            <Cover/>
        </main>
        <footer>
            <a href="http://www.freepik.com">
                Cover image designed by pikisuperstar / Freepik
            </a>
        </footer>
    </>
}