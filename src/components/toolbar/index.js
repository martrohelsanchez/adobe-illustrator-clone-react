import React, { useState } from "react"
import styles from "./toolbar.module.css"
import ToolIcon from "./components/ToolIcon"

import selectionImg from "../../images/selection.svg"
import handImg from "../../images/hand.svg"
import rectangleImg from "../../images/rectangle.svg"

function Toolbar() {
    const [currentTool, setCurrentTool] = useState("selection");

    function switchTool(newTool) {
        setCurrentTool(newTool)
    }

    return (
        <div className={styles.toolbar}>
            <ToolIcon img={selectionImg} switchTool={switchTool} currentTool={currentTool} toolName="selection"/>
            <ToolIcon img={rectangleImg} switchTool={switchTool} currentTool={currentTool} toolName="rectangle"/>
            <ToolIcon img={handImg} switchTool={switchTool} currentTool={currentTool} toolName="hand"/>
        </div>
    )
}

export default Toolbar