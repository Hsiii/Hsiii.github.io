import React from 'react';

import 'components/Links.css';

export default function Links(props) {
    let expandedList = [];

    props.linkList.forEach(link => {
        expandedList.push(
            <div className="link-wrap">
                <i className={'fa-solid fa-' + link.icon}/>
                <a>{link.class}</a>
            </div>
        );
        if (link.child.length) 
            expandedList.push(
                <div className="sub-links">
                    <div className="filler"/>
                    {link.child.map(_link =>
                        <a id={_link}>{_link}</a>
                    )}
                </div>   
            )
    });
    
    return <>
        <section className={`links ${props.show ? '' : 'hide'}`}>
            <div className="indicator">
                <i className="fa-solid fa-bookmark"/>
            </div>
            <div className="filler"/>
            {expandedList.map(l => l)}
        </section>
    </>;
}