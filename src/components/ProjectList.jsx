import { useState } from "react";
import StatusLabel from "./StatusLabel";

const projects = [
  { id: 1, name: "Personal Website", status: "completed" },
  { id: 2, name: "First Web Page", status: "completed" },
  { id: 3, name: "SEO Task", status: "completed" },
  { id: 4, name: "React App with Vite", status: "completed" },
  { id: 5, name: "Task Tracker", status: "in progress" },
];

function ProjectList() {
  const [onlyCompleted, setOnlyCompleted] = useState(false);

  const visibleProjects = onlyCompleted
    ? projects.filter((project) => project.status === "completed")
    : projects;

  return (
    <div className="project-box">
      <h3>My Projects</h3>

      <button onClick={() => setOnlyCompleted(!onlyCompleted)}>
        {onlyCompleted ? "Show all" : "Show only completed"}
      </button>

      <p>
        Showing {visibleProjects.length} of {projects.length} projects
      </p>

      {visibleProjects.length === 0 && <p>No projects found.</p>}

      <ul>
        {visibleProjects.map((project) => (
          <li key={project.id}>
            {project.name} <StatusLabel status={project.status} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectList;
