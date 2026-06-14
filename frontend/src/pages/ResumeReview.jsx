import { useState } from "react";
import axios from "axios";

function ResumeReview() {
  const [resumeText, setResumeText] = useState("");
  const [feedback, setFeedback] = useState("");

  const reviewResume = async () => {
    const res = await axios.post(
      "http://localhost:5000/api/ai/resume-review",
      { resumeText }
    );

    setFeedback(res.data.feedback);
  };

  return (
    <div>
      <h2>AI Resume Review</h2>

      <textarea
        rows="10"
        cols="50"
        value={resumeText}
        onChange={(e) => setResumeText(e.target.value)}
      />

      <br />

      <button onClick={reviewResume}>
        Review Resume
      </button>

      <pre>{feedback}</pre>
    </div>
  );
}

export default ResumeReview;