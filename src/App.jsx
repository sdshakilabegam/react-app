import "./App.css";
import Greeting from "./components/Greeting";
import InfoBox from "./components/InfoBox";
import Badge from "./components/Badge";

function App() {
  return (
    <div className="about">
      <Greeting name="Shakila" place="my React app" />

      <InfoBox title="Role" text="Electronics & Communication Engineer" />
      <InfoBox title="Studying" text="M.Tech in AI & Data Science" />
      <InfoBox
        title="Internship"
        text="Web development at Sree Kavinya Technologies"
      />

      <h3>Skills</h3>
      <Badge label="HTML" color="#e34f26" />
      <Badge label="CSS" color="#1572b6" />
      <Badge label="JavaScript" color="#b8860b" />
      <Badge label="React" color="#0a7ea4" />
    </div>
  );
}

export default App;
