import React, { useState } from "react";
import "../assets/css/Educations.css";

const Educations = () => {
  const [inputValue, setInputValue] = useState("");
  const [educations, setEducations] = useState([]);
  const [educationId, setEducationId] = useState(0);

  return (
    <div>
      <p className="pt_component-title">Educations</p>
      <hr></hr>
      <div className="pt_field-div mt-2 pt_education-fields">
        <div className="pt_input-text-div pt_flex-1">
          <input
            type="text"
            className="pt_input-text pt_w-100-pro"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          ></input>
        </div>
        <button
          className="pt_button"
          onClick={() => {
            if (inputValue.trim() !== "") {
              setInputValue("");
              educations.push({
                id: educationId,
                title: inputValue,
              });
              setEducationId(educationId + 1);
            }
          }}
        >
          Add New
        </button>
      </div>
      <div className="pt_data-list">
        {educations.map((education) => (
          <div className="pt_data-item" key={education.id}>
            {education.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Educations;
