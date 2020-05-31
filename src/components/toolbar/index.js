import React, { useState } from "react"
import styles from "./toolbar.module.css"
import ToolIcon from "./components/ToolIcon"

import selectionImg from "../../images/selection.svg"
import handImg from "../../images/hand.svg"
import rectangleImg from "../../images/rectangle.svg"

function Toolbar({currentTool, setCurrentTool}) {

    // function switchTool(newTool) {
    //     props.switchTool(newTool);
    // }

    return (
        <div className={styles.toolbar}>
            <ToolIcon img={selectionImg} setCurrentTool={setCurrentTool} currentTool={currentTool} toolName="selection"/>
            <ToolIcon img={rectangleImg} setCurrentTool={setCurrentTool} currentTool={currentTool} toolName="rectangle"/>
            <ToolIcon img={handImg} setCurrentTool={setCurrentTool} currentTool={currentTool} toolName="hand"/>
        </div>
    )
}

export default Toolbar