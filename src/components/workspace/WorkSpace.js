import React, {useRef, useState} from "react";
import * as S from './WorkSpace.styles';
import DrawingArea from "../drawingArea/DrawingArea";
import useHand from "../../customHooks/useHand";
import UseRectangle from "../../customHooks/useRectangle";
import useMouseDrag from "../../customHooks/useMouseDrag";

function Workspace({currentTool}) {
    const scrollRef = useRef(null);
    const highlighterRef = useRef(null);
    const [mouseInfo, isDragging, mouseDown] = useMouseDrag();
    const [position, grabDown] = useHand(scrollRef);
    const [workspaceObjects, setWorkspaceObjects] = useState([]);
    const [rectangleDown] = UseRectangle(workspaceObjects, setWorkspaceObjects);
    let cursor;
    
    //set the cursor
    switch (currentTool) {
        case "hand":
            cursor = position.isGrabbing ? "grabbing" : "grab";
            break;
        case "rectangle":
            cursor = "crosshair";
            break;
        default:
            cursor = "default";
    }

    function handleMouseDown(e) {
        switch (currentTool) {
            case "hand":
                grabDown(e)
                break;
            case "rectangle":
                console.log("rectangle");
                break;
            case "selection":
                // document.addEventListener('mousemove', onSelectionMove);
                // document.addEventListener('mouseup', onSelectionRelease);
                // // console.log(e.clientX)
                // highlighterRef.current.style.left = e.clientX + 'px';
                // highlighterRef.current.style.top = e.clientY + 'px';
                mouseDown(e.clientX, e.clientY);
                break;
        }
    }

    function onSelectionMove(e) {
        
    }

    function onSelectionRelease(e) {
        document.removeEventListener('mousemove', onSelectionMove);
    }
    
    return (
        <S.WorkSpace style={{cursor: cursor}}>
            <S.Scroll onMouseDown={handleMouseDown} ref={scrollRef}>
                <DrawingArea workspaceObjects={workspaceObjects} />
                <S.Scrolling></S.Scrolling>
                <S.Highlighter
                    ref={highlighterRef}
                    style={{
                        width: mouseInfo.x,
                        height: mouseInfo.y,
                        left: mouseInfo.startX,
                        top: mouseInfo.startY
                    }}
                >
                </S.Highlighter>
            </S.Scroll>
        </S.WorkSpace>
    )
}

export default Workspace