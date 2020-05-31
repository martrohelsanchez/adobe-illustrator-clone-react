import React from "react"
import Toolbar from "./toolbar"
import Workspace from "./workspace"
import Panel from "./panels/Panel"
import "./globalStyles.css"


function App() {
    const [currentTool, setCurrentTool] = useState("selection");

    return (
        <div className="container">
            <Toolbar />
            <Workspace />
            <Panel />
        </div>
    )
}

export default App