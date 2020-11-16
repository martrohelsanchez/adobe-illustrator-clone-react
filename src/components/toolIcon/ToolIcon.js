import React from "react"
import * as S from './ToolIcon.styles';

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
        <S.ToolCont style={{backgroundColor: bgColor}} onClick={handleClick}>
            <S.ToolIcon src={img} alt="tool" />
        </S.ToolCont>
    )
}

export default ToolIcon 