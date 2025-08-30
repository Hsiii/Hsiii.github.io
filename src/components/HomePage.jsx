import React, { useEffect } from 'react';

import Cover from 'components/CoverOnlyLinks.jsx';

import setLinks from 'utilities/link.jsx';
import 'utilities/colorPalette.css';

import 'components/HomePage.css';

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