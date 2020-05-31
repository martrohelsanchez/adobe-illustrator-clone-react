import React from "react"
import styles from "../toolbar.module.css";

function ToolIcon({ img, currentTool, setCurrentTool, toolName}) {
    const clicked = currentTool === toolName;
    const bgColor = clicked ? "#30302F" : "transparent";

    function handleClick(e) {
        //prevent rerender if user clicked on currentTool
        if (!(currentTool === toolName)) {
            setCurrentTool(toolName);
        }
    }

    return (
        <div style={{backgroundColor: bgColor}} onClick={handleClick} className={styles.toolContainer}>
            <img className={styles.toolIcon} src={img} alt="tool" />
        </div>
    )
}

export default ToolIcon 