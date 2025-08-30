import React, { useEffect } from 'react';

import Cover from 'homepage/Cover.jsx';

import setLinks from 'utilities/link.jsx';
import 'utilities/colorPalette.css';

import 'homepage/Main.css';

export default function Main(props) {
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