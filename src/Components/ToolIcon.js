


export const ToolIcon = (props) => {




    return <div className="tool-icon">
        <h3> {props.toolName}</h3>
        <img src={props.SRC} alt={props.toolname + " tool"}/>
    </div>
}
