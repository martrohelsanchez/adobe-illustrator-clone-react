import React from "react";
import * as S from './DrawingArea.styles';

function DrawingArea({ workspaceObjects}) {
    return (
        <S.DrawingArea>
            {workspaceObjects}
        </S.DrawingArea>
    )
}

export default DrawingArea