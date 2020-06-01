import React, {useRef, useEffect} from "react";
import styles from "./workspace.module.css";
import DrawingArea from "./components/DrawingArea";
import useHand from "../../customHooks/useHand";

function Workspace({currentTool}) {
    const scroll = useRef(null);
    const [position, grabDown] = useHand(scroll);
    let cursor;
    
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
        if (currentTool === "hand") {
            grabDown(e)
        }
    }
    
    return (
        <div style={{cursor: cursor}} className={styles.workspace}>
            <div onMouseDown={handleMouseDown} ref={scroll} className={styles.scroll} >
                <DrawingArea />
                <div className={styles.scrolling} ></div>
            </div>
        </div>
    )
}

export default Workspace