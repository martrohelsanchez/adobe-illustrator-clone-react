import React, { useState, useEffect } from "react"

function useHand(scroll) {
    const [position, setPostition] = useState({
        scrollLeft: 0,
        scrollTop: 0,

        initialScrollLeft: 4500,
        initialScrollTop: 4920,

        initialX: 0,
        initialY: 0,

        clientX: 0,
        clientY: 0,
    });

    useEffect(() => {
        scroll.current.scrollLeft = position.initialScrollLeft + position.scrollLeft;
        scroll.current.scrollTop = position.initialScrollTop + position.scrollTop;
    });
    
    function onMouseDown(e) {
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
        e.preventDefault();

        setPostition({
            scrollLeft: 0,
            scrollTop: 0,

            initialScrollLeft: scroll.current.scrollLeft,
            initialScrollTop: scroll.current.scrollTop,

            initialX: e.clientX,
            initialY: e.clientY,

            clientX: e.clientX,
            clientY: e.clientY,
        })
    }

    function onMouseMove(e) {
        setPostition(prev => {
            return {
                scrollLeft: prev.clientX - prev.initialX,
                scrollTop: prev.clientY - prev.initialY,

                initialScrollLeft: prev.initialScrollLeft,
                initialScrollTop: prev.initialScrollTop,

                initialX: prev.initialX,
                initialY: prev.initialY,

                clientX: e.clientX,
                clientY: e.clientY,
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