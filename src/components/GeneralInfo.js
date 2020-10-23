import React from "react";
import "../styles/GeneralInfo.css"

const GeneralInfo = props => {

    return (

        <div className="GeneralInfoContainer">
            <div className={props.formView}>
        
                <h1 className="Title">Write your personal info:</h1>

                <hr/>

                <form onSubmit={props.onSubmit}>

                    <div className="form-group">
                        <label htmlFor="NameInput">Name:</label>
                        <input name="name" required className="NameInput form-control" type="text"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="EmailInput">Email:</label>
                        <input name="email" required placeholder="email@example.com" className="EmailInput form-control" type="email"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="PhoneInput">Phone number:</label>
                        <input name="phone" required className="PhoneInput form-control" type="number"/>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>

                </form>
            </div>
            
            <div className={props.dataView}>

                <div className="TitleContainer">   
                    <h1 className="Title">Personal Info</h1>
                    <button onClick={props.OnClick} className="EditButton btn btn-success">Edit</button>
                </div>
                
                <hr/>

                <div>
                    <label>Name:</label>
                    <h2>{props.info.name}</h2>
                </div>

                <div>
                    <label>Email:</label>
                    <h2>{props.info.email}</h2>
                </div>

                <div>
                    <label>Phone Number:</label>
                    <h2>{props.info.phone}</h2>
                </div>    

            </div>
        </div>

        
    )  
}

export default GeneralInfo;