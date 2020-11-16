import styled from 'styled-components';

export const ToolIcon = styled.img`
    height: 15px;
    display: block;
    margin: auto;
`;

export const ToolCont = styled.div`
    padding: 2px 3px;
    margin: 10px auto;
    box-sizing: border-box;
    width: 30px;

    &::hover {
        background-color: #3E3E3D !important;
        cursor: pointer;
        border-radius: 3px;
    }
`;