import React, { useState, useEffect } from "react"

function useHand(scroll) {
    const [position, setPostition] = useState({
        addScrollLeft: 0,
        addScrollTop: 0,

        initialScrollLeft: 4500,
        initialScrollTop: 4920,

        initialClientX: 0,
        initialClientY: 0,
    });

    useEffect(() => {
        scroll.current.scrollLeft = position.initialScrollLeft + position.addScrollLeft;
        scroll.current.scrollTop = position.initialScrollTop + position.addScrollTop;
    });
    
    function onMouseDown(e) {
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
        e.preventDefault();

        setPostition({
            addScrollLeft: 0,
            addScrollTop: 0,

            initialScrollLeft: scroll.current.scrollLeft,
            initialScrollTop: scroll.current.scrollTop,

            initialClientX: e.clientX,
            initialClientY: e.clientY,
        })
    }

    function onMouseMove(e) {
        setPostition(prev => {
            return {
                addScrollLeft: e.clientX - prev.initialClientX,
                addScrollTop: e.clientY - prev.initialClientY,

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