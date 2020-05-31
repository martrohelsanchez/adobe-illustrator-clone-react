import React, { useState } from "react"
import Toolbar from "./toolbar"
import Workspace from "./workspace"
import Panel from "./panels/Panel"
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