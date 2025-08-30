import React, { useEffect } from 'react';
import linkList from 'utilities/bookmarkLink.jsx';
import 'homepage/Links.css';

export default function Links({show}) {
    return <>
        <section className={`links ${show ? '' : 'hide'}`}>
            <div className="indicator">
                <i className="fa-solid fa-bookmark"/>
            </div>
            <div className="filler"/>
            {linkList.map((link, i) => <>
                <div className="link-header">
                    <i className={'fa-solid fa-' + link.icon}/>
                    <a>{link.class}</a>
                </div>
                <div 
                    className="sub-links" 
                    style={{
                        '--padding': 
                            (headerIndex => {
                                const windowHeight = window.innerHeight;
                                const remToPx = 16;
                                const linkHeight = 3.4 * remToPx; // rem to px
                                const headerPosition = windowHeight / 2 + (headerIndex + 1 - linkList.length / 2 - .5) * linkHeight;
                                const linksHeight = link.child.length * linkHeight;
                                let padding;
                                if (headerPosition + linksHeight / 2 <= windowHeight - remToPx) 
                                    padding = headerPosition - linksHeight / 2;
                                else 
                                    padding = windowHeight - linksHeight - remToPx;
                                if (padding < remToPx) 
                                    padding = remToPx;
                                return padding + 'px';
                            })(i)
                    }}
                >
                    <div className="filler"/>
                    {link.child.map(_link =>
                        <a id={_link}>{_link}</a>
                    )}
                </div> 
            </>)}
        </section>
    </>;
}