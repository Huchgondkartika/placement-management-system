import { useState } from "react";
import axios from "axios";

function SkillGap() {
  const [skills, setSkills] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [result, setResult] = useState("");

  const analyzeSkillGap = async () => {
    const res = await axios.post(
      "http://localhost:5000/api/ai/skill-gap",
      {
        skills,
        jobRole
      }
    );

    setResult(res.data.result);
  };

  return (
    <div>
      <h2>Skill Gap Analysis</h2>

      <input
        type="text"
        placeholder="Enter Skills"
        value={skills}
        onChange={(e) => setSkills(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Target Job Role"
        value={jobRole}
        onChange={(e) => setJobRole(e.target.value)}
      />

      <br /><br />

      <button onClick={analyzeSkillGap}>
        Analyze Skill Gap
      </button>

      <pre>{result}</pre>
    </div>
  );
}

export default SkillGap;