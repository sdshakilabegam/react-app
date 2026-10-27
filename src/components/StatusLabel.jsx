function StatusLabel({ status }) {
  if (status === "completed") {
    return <span className="status-label status-done">Completed</span>;
  }
  return <span className="status-label status-progress">In progress</span>;
}

export default StatusLabel;
