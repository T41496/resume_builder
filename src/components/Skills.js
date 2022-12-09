import React, { useState } from "react";

import "../assets/css/Skills.css";

const Skills = () => {
  const [description, setDescription] = useState("");
  const [level, setLevel] = useState(1);
  const [year, setYear] = useState(1);
  const [skills, setSkills] = useState([]);
  const [skillId, setSkillId] = useState(0);

  return (
    <div>
      <p className="pt_component-title">Skills</p>
      <hr></hr>
      <div className="pt_field-div mt-2 pt_skill-fields">
        <div className="grid md:grid-cols-4 grid-cols-2 gap-2 items-end">
          <div>
            <strong>Skill Title</strong>
            <br />
            <div className="pt_input-text-div">
              <input
                type="text"
                className="pt_input-text pt_w-100-pro mt-2"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></input>
            </div>
          </div>
          <div>
            <strong>Experience Level</strong>
            <br />
            <select
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              className="pt_select pt_w-100-pro mt-2"
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div>
            <strong>Year of Experience</strong>
            <br />
            <div className="pt_input-text-div">
              <input
                type="number"
                className="pt_input-text pt_w-100-pro mt-2"
                value={year}
                min={1}
                onChange={(e) => setYear(e.target.value)}
              ></input>
            </div>
          </div>
          <div className="text-right">
            <button
              className="pt_button"
              onClick={() => {
                if (
                  description.trim() !== "" &&
                  year.toString().trim() !== ""
                ) {
                  setDescription("");
                  setLevel(1);
                  setYear(1);
                  skills.push({
                    id: skillId,
                    description: description,
                    level: level,
                    year: year,
                  });
                  setSkillId(skillId + 1);
                }
              }}
            >
              Add New
            </button>
          </div>
        </div>
      </div>
      <div className="pt_data-list">
        {skills.map((skill) => (
          <div className="pt_data-item flex justify-between" key={skill.id}>
            <span>{skill.description}</span>
            <span>Level: {skill.level}</span>
            <span>Year of Experience: {skill.year}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
