import React, { useEffect } from 'react';

import Cover from 'components/CoverOnlyLinks.jsx';

import setLinks from 'utilities/link.jsx';
import 'utilities/colorPalette.css';

import 'components/Home.css';

export default function HomeOnlyLinks(props) {
    useEffect(() => {
        setLinks();
    }, []);

    return <>
        <main>
            <Cover/>
        </main>
        <footer>
            <a href="http://www.freepik.com">
                Cover designed by pikisuperstar / Freepik
            </a>
        </footer>
    </>
}