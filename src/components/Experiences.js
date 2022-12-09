import React, { useState } from "react";
import DatePicker from "react-date-picker";
import moment from "moment";

import "../assets/css/Experiences.css";

const Experiences = () => {
  const [description, setDescription] = useState("");
  const [experienceFrom, setExperienceFrom] = useState("");
  const [experienceTo, setExperienceTo] = useState("");
  const [experiences, setExperiences] = useState([]);
  const [experienceId, setExperienceId] = useState(0);

  return (
    <div>
      <p className="pt_component-title">Experiences</p>
      <hr></hr>
      <div className="pt_field-div mt-2 pt_experience-fields">
        <div className="grid lg:grid-cols-3 gap-2 pt_flex-1">
          <div className="pt_input-text-div">
            <input
              type="text"
              className="pt_input-text pt_w-100-pro"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></input>
          </div>
          <div className="text-right">
            <strong>From </strong> <br className="pt_display-none" />
            <DatePicker
              className="ml-4 pt_datepicker"
              value={experienceFrom}
              onChange={(date) => setExperienceFrom(date)}
            />
          </div>
          <div className="text-right">
            <strong>To </strong> <br className="pt_display-none" />
            <DatePicker
              className="ml-4 pt_datepicker"
              value={experienceTo}
              onChange={(date) => setExperienceTo(date)}
            />
          </div>
        </div>
        <div>
          <button
            className="pt_button"
            onClick={() => {
              if (
                description.trim() !== "" &&
                experienceFrom.toString().trim() !== "" &&
                experienceTo.toString().trim() !== ""
              ) {
                setDescription("");
                setExperienceFrom("");
                setExperienceTo("");
                experiences.push({
                  id: experienceId,
                  description: description,
                  from: moment(experienceFrom).format("MM/DD/YYYY"),
                  to: moment(experienceTo).format("MM/DD/YYYY"),
                });
                setExperienceId(experienceId + 1);
              }
            }}
          >
            Add New
          </button>
        </div>
      </div>
      <div className="pt_data-list">
        {experiences.map((experience) => (
          <div
            className="pt_data-item flex justify-between"
            key={experience.id}
          >
            <div>{experience.description}</div>
            <div className="flex gap-5">
              <div>From {experience.from}</div>
              <div>To {experience.to}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
