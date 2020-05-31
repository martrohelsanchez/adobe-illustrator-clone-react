import React from "react"

function useHand() {
    const [position, setPostition] = useState({
        transformX: 0,
        transformY: 0,

        initialX: 0,
        initialY: 0,

        clientX: 0,
        clientY: 0,

        isDragging: false
    });

    function onMouseDown(e) {
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
        e.preventDefault();

        setPostition({
            transformX: 0,
            transformY: 0,

            initialX: e.clientX,
            initialY: e.clientY,

            clientX: e.clientX,
            clientY: e.clientY,

            isDragging: true
        })
    }

    function onMouseMove(e) {
        setPostition(prev => {
            return {
                transformX: prev.clientX - prev.initialX,
                transformY: prev.clientY - prev.initialY,

                initialX: prev.initialX,
                initialY: prev.initialY,

                clientX: e.clientX,
                clientY: e.clientY,

                isDragging: prev.isDragging
            }
        })
    }

    function onMouseUp(e) {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);

        setPostition({
            transformX: 0,
            transformY: 0,

            initialX: e.clientX,
            initialY: e.clientY,

            clientX: e.clientX,
            clientY: e.clientY,

            isDragging: false
        })
    }

    return [position, onMouseDown];
}

export default useHand