import React from 'react';
import useCanvas from 'utilities/useCanvas.jsx';

export default function Canvas(props) {  
    const { draw, ...rest } = props;
    const ref = useCanvas(draw);

    return <canvas ref={ref} {...rest}/>;
}