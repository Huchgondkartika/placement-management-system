import { useState } from "react";
import axios from "axios";

function InterviewQuestions() {
  const [jobRole, setJobRole] = useState("");
  const [questions, setQuestions] = useState("");

  const generateQuestions = async () => {
    const res = await axios.post(
      "http://localhost:5000/api/ai/interview-questions",
      {
        jobRole
      }
    );

    setQuestions(res.data.questions);
  };

  return (
    <div>
      <h2>Interview Question Generator</h2>

      <input
        type="text"
        placeholder="Enter Job Role"
        value={jobRole}
        onChange={(e) => setJobRole(e.target.value)}
      />

      <br /><br />

      <button onClick={generateQuestions}>
        Generate Questions
      </button>

      <pre>{questions}</pre>
    </div>
  );
}

export default InterviewQuestions;