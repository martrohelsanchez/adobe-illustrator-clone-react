import React from "react"
// import styles from "./toolbar.module.css"
import * as S from './ToolBar.styles';
import ToolIcon from "../toolIcon/ToolIcon"

import selectionImg from "../../images/selection.svg"
import handImg from "../../images/hand.svg"
import rectangleImg from "../../images/rectangle.svg"

function Toolbar({currentTool, setCurrentTool}) {

    return (
        <S.ToolBar>
            <ToolIcon img={selectionImg} setCurrentTool={setCurrentTool} currentTool={currentTool} toolName="selection"/>
            <ToolIcon img={rectangleImg} setCurrentTool={setCurrentTool} currentTool={currentTool} toolName="rectangle"/>
            <ToolIcon img={handImg} setCurrentTool={setCurrentTool} currentTool={currentTool} toolName="hand"/>
        </S.ToolBar>
    )
}

export default Toolbar