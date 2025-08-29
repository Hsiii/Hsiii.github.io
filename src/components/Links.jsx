import React from 'react';
import linkList from 'utilities/bookmarkLink.jsx';
import 'components/Links.css';

export default function Links({show}) {
    return <>
        <section className={`links ${show ? '' : 'hide'}`}>
            <div className="indicator">
                <i className="fa-solid fa-bookmark"/>
            </div>
            <div className="filler"/>
            {linkList.map(link => <>
                <div className="link-wrap">
                    <i className={'fa-solid fa-' + link.icon}/>
                    <a>{link.class}</a>
                </div>
                <div className="sub-links" style={{'--padding': 1 + 'rem'}}>
                    <div className="filler"/>
                    {link.child.map(_link =>
                        <a id={_link}>{_link}</a>
                    )}
                </div> 
            </>)}
        </section>
    </>;
}