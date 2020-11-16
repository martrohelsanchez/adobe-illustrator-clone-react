import styled from 'styled-components';

export const WorkSpace = styled.div`
    width: 400px;
    flex-grow: 1;
    flex-shrink: 2;
    align-self: stretch;
`;

export const Scrolling = styled.div`
    width: 10000px;
    height: 10000px;
`;

export const Scroll = styled.div`
    overflow: scroll;
    height: 100%;
`;

export const Highlighter = styled.div`
    position: absolute;
    border: 1px dashed black;
`;