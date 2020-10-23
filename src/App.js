
import GeneralInfo from "./components/GeneralInfo"
import EducationalInfo from "./components/EducationalInfo"
import PracticalInfo from "./components/PracticalInfo"
import React, { useState } from "react";

import "./styles/App.css"

function App() {

  const [formGeneral, setFormGeneral] = useState("active");
  const [dataGeneral, setDataGeneral] = useState("disabled");
  const [generalInfo, setGeneralInfo] = useState({});

  const [formEducational, setFormEducational] = useState("active");
  const [dataEducational, setDataEducational] = useState("disabled");
  const [educationalInfo, setEducationalInfo] = useState({});

  const [formPractical, setFormPractical] = useState("active");
  const [dataPractical, setDataPractical] = useState("disabled");
  const [practicalInfo, setPracticalInfo] = useState({});

  
  function handleGeneral(event) {
    setFormGeneral("disabled");
    setDataGeneral("active"); 
    
    setGeneralInfo({
      "name": event.target.name.value,
      "email": event.target.email.value,
      "phone": event.target.phone.value
    })

    event.preventDefault();
  }

  function editGeneral() {
    setFormGeneral("active");
    setDataGeneral("disabled");
  }

  function handleEducational(event) {
    setFormEducational("disabled");
    setDataEducational("active");

    setEducationalInfo({
      "school": event.target.school.value,
      "title": event.target.title.value,
      "date": event.target.date.value
    })

    event.preventDefault();
  }

  function editEducational() {
    setFormEducational("active");
    setDataEducational("disabled");
  }

  function handlePractical(event) {
    setFormPractical("disabled");
    setDataPractical("active");

    setPracticalInfo({
      "company": event.target.company.value,
      "position": event.target.position.value,
      "task": event.target.task.value,
      "time": event.target.time.value
    });

    event.preventDefault();
  }

  function editPractical() {
    setFormPractical("active");
    setDataPractical("disabled");
  }
  

  return (
    <div className="App container">
      
      <GeneralInfo 
      onSubmit={handleGeneral} 
      dataView={dataGeneral} 
      formView={formGeneral}
      info={generalInfo}
      OnClick={editGeneral}
      />

      <EducationalInfo 
      onSubmit={handleEducational} 
      dataView={dataEducational}
      formView={formEducational}
      info={educationalInfo}
      OnClick={editEducational}
      />

      <PracticalInfo 
      onSubmit={handlePractical}
      dataView={dataPractical}
      formView={formPractical}
      info={practicalInfo}
      OnClick={editPractical}
      />
    </div>
  );
}

export default App;
