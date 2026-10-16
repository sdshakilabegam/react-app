import Badge from "./Badge";

const skills = [
  { id: 1, label: "HTML", color: "#e34f26" },
  { id: 2, label: "CSS", color: "#1572b6" },
  { id: 3, label: "JavaScript", color: "#b8860b" },
  { id: 4, label: "React", color: "#0a7ea4" },
  { id: 5, label: "Git", color: "#f05032" },
];

const learning = ["React props", "Git and GitHub", "JSX and components"];

function AboutMe({ name, role }) {
  return (
    <section className="about-me">
      <h2>About Me</h2>
      <p>
        {name} - {role}
      </p>

      <h3>Skills</h3>
      {skills.map((skill) => (
        <Badge key={skill.id} label={skill.label} color={skill.color} />
      ))}

      <h3>Currently learning</h3>
      <ul>
        {learning.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default AboutMe;
