import React, {useRef, useEffect} from "react";
import styles from "./workspace.module.css";
import DrawingArea from "./components/DrawingArea";
import useHand from "../../customHooks/useHandCopy";

function Workspace() {
    const scroll = useRef(null);
    const [position, onMouseDown] = useHand(scroll);

    function handleMouseDown(e) {
        onMouseDown(e)
    }
    
    return (
        <div className={styles.workspace}>
            <div onMouseDown={handleMouseDown} ref={scroll} className={styles.scroll} >
                <DrawingArea />
                <div className={styles.scrolling} ></div>
            </div>
        </div>
    )
}

export default Workspace