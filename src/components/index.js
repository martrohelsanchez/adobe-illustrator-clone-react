import React, { useState } from "react"
import Toolbar from "./toolbar/ToolBar"
import Workspace from "./workspace/WorkSpace"
import Panel from "./panel/Panel"
import "./globalStyles.css"


function App() {
    const [currentTool, setCurrentTool] = useState("selection");

    function switchTool(newTool) {
        setCurrentTool(newTool);
    }

    return (
        <div className="container">
            <Toolbar currentTool={currentTool} setCurrentTool={switchTool}/>
            <Workspace currentTool={currentTool}/>
            <Panel />
        </div>
    )
}

export default App