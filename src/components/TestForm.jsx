import React, { useEffect, useRef, useState } from 'react';
import 'components/Test.css';
import getRect from 'utilities/getRect.jsx';

export default function TestForm(props) {
    const [editing, setEditing] = useState(false);
    const [content, setContent] = useState('');
    const [width, setWidth] = useState(0);
    const [prevContent, setPrevContent] = useState('');
    const input = useRef(null);
    const form = useRef(null);
    const key = props.editKey;

    useEffect(() => {
        fetch().then(c =>
            setContent(c)
        );
        setWidth(getRect(form).width);
    }, []);

    const expand = () => {
        setWidth(getRect(form).width);
        setEditing(true);
        setTimeout(() => input.current.focus(), 10); 
        // no idea why we need setTimeout
    }
    
    const submit = () => {
        edit(content).then(() => {
            setEditing(false);
        }).catch(err => {
            console.error('Edit error', err);
        });
    }

    const edit = c => {
        return new Promise((resolve, reject) => {
            resolve(_edit(c));
        });
    }
    
    const _edit = c => {
        localStorage.setItem('edit' + key, c);
        return c;
    }

    const fetch = () => {
        return new Promise((resolve, reject) => {
            resolve(_fetch());
        });
    }
    
    const _fetch = () => {
        let text = localStorage.getItem('edit' + key);
        if (!text) 
            return '-';
        return text;
    }

    return <>    
        <form onClick={expand} onSubmit={submit} ref={form}>
            {editing ? '' : content}
            <input type="text" hidden={!editing} ref={input} value={content} onChange={e => setContent(e.target.value)} onFocus={() => setPrevContent(content)} onBlur={() => setContent(prevContent)} style={{'--width': width + 'px'}}/>
        </form>
    </>
}