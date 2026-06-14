import ResumeReview from "./pages/ResumeReview";
import SkillGap from "./pages/SkillGap";
import InterviewQuestions from "./pages/InterviewQuestions";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Placement Management System</h1>

      <ResumeReview />

      <hr />

      <SkillGap />

      <hr />

      <InterviewQuestions />
    </div>
  );
}

export default App;