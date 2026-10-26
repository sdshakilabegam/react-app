import "./App.css";
import Greeting from "./components/Greeting";
import InfoBox from "./components/InfoBox";
import AboutMe from "./components/AboutMe";
import Counter from "./components/Counter";
import ShowHide from "./components/ShowHide";

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

      <AboutMe name="Shakila" role="Web development intern" />

      <Counter />
      <ShowHide />
    </div>
  );
}

export default App;
