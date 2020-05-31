import React, { useState, useEffect } from "react"

function useHand(scroll) {
    const [position, setPostition] = useState({
        displacedX: 0,
        displacedY: 0,

        initialScrollLeft: 4500,
        initialScrollTop: 4920,

        initialClientX: 0,
        initialClientY: 0,
    });

    useEffect(() => {
        scroll.current.scrollLeft = position.initialScrollLeft - position.displacedX;
        scroll.current.scrollTop = position.initialScrollTop - position.displacedY;
    });
    
    function onMouseDown(e) {
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
        e.preventDefault();

        setPostition({
            displacedX: 0,
            displacedY: 0,

            initialScrollLeft: scroll.current.scrollLeft,
            initialScrollTop: scroll.current.scrollTop,

            initialClientX: e.clientX,
            initialClientY: e.clientY,
        })
    }

    function onMouseMove(e) {
        setPostition(prev => {
            return {
                displacedX: e.clientX - prev.initialClientX,
                displacedY: e.clientY - prev.initialClientY,

                initialScrollLeft: prev.initialScrollLeft,
                initialScrollTop: prev.initialScrollTop,

                initialClientX: prev.initialClientX,
                initialClientY: prev.initialClientY,
            }
        })
    }

    function onMouseUp(e) {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
    }

    return [position, onMouseDown];
}

export default useHand