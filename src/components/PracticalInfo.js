import React from "react";
import "../styles/PracticalInfo.css"

const PracticalInfo = props => {
    
    return (
        <div className="PracticalInfoContainer">
            <div className={props.formView}>

                <h1 className="Title">Write your practicals experiences:</h1>

                <hr/>

                <form onSubmit={props.onSubmit} >
                    <div className="form-group">
                        <label htmlFor="CompanyInput">Company name:</label>
                        <input name="company" className="CompanyInput form-control" type="text"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="PositionInput">Position title:</label>
                        <input name="position" className="PositionInput form-control" type="text"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="TasksInput">What you used to work on:</label>
                        <input name="task" className="TasksInput form-control" type="text"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="TimeInput">Time you worked:</label>
                        <input name="time" className="TimeInput form-control" type="text"/>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>

            <div className={props.dataView}>
                
                <div className="TitleContainer">   
                    <h1 className="Title">Practical experiences Info</h1>
                    <button onClick={props.OnClick} className="EditButton btn btn-success">Edit</button>
                </div>

                <hr/>

                <div>
                    <label>Worked on company:</label>
                    <h2>{props.info.company}</h2>
                </div>

                <div>
                    <label>In position of:</label>
                    <h2>{props.info.position}</h2>
                </div>

                <div>
                    <label>Used to work on:</label>
                    <h2>{props.info.task}</h2>
                </div> 

                <div>
                    <label>Worked for:</label>
                    <h2>{props.info.time}</h2>
                </div>   

            </div>

        </div>
    )
} 

export default PracticalInfo;