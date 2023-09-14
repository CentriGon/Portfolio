



export const Project = (props) => {



    return <div className="project">
        <img src={props.SRC}/>
        <div className="under-info">
            <div className="name-and-detail">
                <h1> {props.projectName} </h1>
                <p> {props.projectInfo} </p>
            </div>
            <div className="tools-list">
                <h3> Tools Used: </h3>
                <div className="tool-pictures">
                    {props.tools.map((item) => {
                        return <img className="tool-used-icon" src={item} alt="tool icon"/>
                    })}
                </div>
            </div>
        </div>
    </div>
} 
