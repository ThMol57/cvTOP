import React from "react";
import "../styles/EducationalInfo.css"

const EducationalInfo = props => {

    return (
        <div className="EducationalInfoContainer">
            <div className={props.formView}>
                <h1 className="Title">Write your educational info:</h1>

                <hr/>

                <form onSubmit={props.onSubmit}>

                    <div className="form-group">
                        <label htmlFor="SchoolInput">School name:</label>
                        <input name="school" className="SchoolInput form-control" type="text"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="TitleInput">Title of study:</label>
                        <input name="title" className="TitleInput form-control" type="text"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="DateInput">Date of Study:</label>
                        <input name="date" className="DateInput form-control" type="date"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>

                </form>
            </div>

            <div className={props.dataView}>

                <div className="TitleContainer">   
                    <h1 className="Title">Educational Info</h1>
                    <button onClick={props.OnClick} className="EditButton btn btn-success">Edit</button>
                </div>

                <hr/>

                <div>
                    <label>School Info:</label>
                    <h2>{props.info.school}</h2>
                </div>

                <div>
                    <label>Study title:</label>
                    <h2>{props.info.title}</h2>
                </div>

                <div>
                    <label>Date of Study:</label>
                    <h2>{props.info.date}</h2>
                </div> 
            </div>
        </div>
    )
}

export default EducationalInfo;