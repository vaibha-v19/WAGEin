import React, { useState } from 'react';
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
function Signform3() {
  const [skillLevel, setSkillLevel] = useState('');
  const [skills, setSkills] = useState('');

  const handleSkillLevelChange = (event) => {
    setSkillLevel(event.target.value);
    // Reset skills when skill level changes
    setSkills('');
  };

  const handleSkillsChange = (event) => {
    setSkills(event.target.value);
  };

  return (
    <>
      <Navbar />
      <div className="signup-container">
      <h2>Skill Information</h2>
      <form>
        <div className="form-group">
          <label htmlFor="skillLevel">Select your skill level:</label>
          <select id="skillLevel" value={skillLevel} onChange={handleSkillLevelChange}>
            <option value="">Select</option>
            <option value="skilled">Skilled</option>
            <option value="semi-skilled">Semi-Skilled</option>
            <option value="unskilled">Unskilled</option>
          </select>
        </div>
        {(skillLevel === 'skilled' || skillLevel === 'semi-skilled') && (
          <div className="form-group">
            <label htmlFor="skills">Select your skills:</label>
            {skillLevel === 'semi-skilled' ? (
              <input
                type="text"
                id="skills"
                value={skills}
                onChange={handleSkillsChange}
                placeholder="Enter your skills"
              />
            ) : (
              <select id="skills" value={skills} onChange={handleSkillsChange}>
                <option value="">Select</option>
                <option value="html">HTML</option>
                <option value="css">CSS</option>
                <option value="javascript">JavaScript</option>
                {/* Add more skills as needed */}
              </select>
            )}
          </div>
        )}
          <Link to="/signform2">
            {" "}
            <button className="button1">Next</button>
          </Link>
      </form>
    </div>
    
    </>
   
  );
}

export default Signform3;
