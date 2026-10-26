import { useState } from "react";

function ShowHide() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="toggle">
      <h3>Show / Hide</h3>
      <button onClick={() => setVisible(!visible)}>
        {visible ? "Hide" : "Show"} message
      </button>
      {visible && (
        <p>I am learning React state at Sree Kavinya Technologies.</p>
      )}
    </div>
  );
}

export default ShowHide;
