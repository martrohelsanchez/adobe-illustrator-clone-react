import React, { useState } from 'react';

function useMouseDrag() {
    const [isDragging, setIsDragging] = useState(false);
    const [mouseInfo, setMouseInfo] = useState({
        x: 0, 
        y: 0,
        startX: 0,
        startY: 0
    });

    function mouseDown(x, y) {
        setIsDragging(true);
        setMouseInfo({
            x: 0,
            y: 0,
            startX: x,
            startY: y
        })

        document.addEventListener('mousemove', mouseMove);
        document.addEventListener('mouseup', mouseUp);
    }

    function mouseMove(e) {
        setMouseInfo(prev => {
            console.log(prev)
            return {
                x: e.clientX - prev.startX,
                y: e.clientY - prev.startY,
                startX: prev.startX,
                startY: prev.startY
            }
        })
    }

    function mouseUp(e) {
        setIsDragging(false);
        setMouseInfo({
            x: 0,
            y: 0,
            startX: 0,
            startY: 0
        })
        document.removeEventListener('mousemove', mouseMove);
    }

    return [mouseInfo, isDragging, mouseDown];
}

export default useMouseDrag;