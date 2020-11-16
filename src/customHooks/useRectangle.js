import React, { useState } from "react"

function UseRectangle(workspaceObjects, setWorkspaceObjects) {
    const [position, setPostition] = useState({
        displacedX: 0,
        displacedY: 0,

        initialClientX: 0,
        initialClientY: 0
    });

    // style = {
    //     display: "relative", 
    //     left: initialClientX + displacedX,
    //     top: initialClientY + displacedY
    // }

    function onMouseDown(e) {
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
        e.preventDefault();

        setPostition({
            displacedX: 0,
            displacedY: 0,

            initialClientX: e.clientX,
            initialClientY: e.clientY
        })
    }

    function onMouseMove(e) {
        setWorkspaceObjects([
            ...workspaceObjects,
            <div className={"object"}></div>
        ])
        setPostition(prev => {
            return {
                displacedX: e.clientX - prev.initialClientX,
                displacedY: e.clientY - prev.initialClientY,

                initialClientX: prev.initialClientX,
                initialClientY: prev.initialClientY
            }
        })
    }

    function onMouseUp(e) {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);

        setPostition(prev => {
            return {
                displacedX: prev.displacedX,
                displacedY: prev.displacedY,

                initialClientX: prev.initialClientX,
                initialClientY: prev.initialClientY
            }
        })
    }

    return [onMouseDown];
}

export default UseRectangle;