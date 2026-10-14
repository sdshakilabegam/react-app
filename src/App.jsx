import "./App.css";

function App() {
  const name = "Shakila Begam S.D.";
  const role = "Electronics & Communication Engineer";
  const study = "M.Tech in AI & Data Science";
  const intro =
    "I am learning web development as an intern at Sree Kavinya Technologies. This is my first React app, built with Vite.";

  return (
    <div className="about">
      <h1>{name}</h1>
      <h2>{role}</h2>
      <p className="study">{study}</p>

      <h3>About Me</h3>
      <p>{intro}</p>

      <h3>What I am learning</h3>
      <ul>
        <li>HTML, CSS and JavaScript</li>
        <li>Git and GitHub</li>
        <li>React with Vite</li>
      </ul>
    </div>
  );
}

export default App;
