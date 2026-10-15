function Badge({ label, color }) {
  return (
    <span className="badge" style={{ backgroundColor: color }}>
      {label}
    </span>
  );
}

export default Badge;
