import React from 'react';

import ItemContainer from 'playground/Itemcontainer.jsx';

import 'playground/DragAndDrop.css';

export default function DragAndDrop(props) {
    return (
        <div className='drag-and-drop'>
            <ItemContainer child={['1', '2']}></ItemContainer>
            <ItemContainer child={['3', '4']}></ItemContainer>
        </div>
    );
}