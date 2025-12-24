import { useState } from "react";
import "./UsernameForm.css";

function UsernameForm() {
  const [username, setUsername] = useState("");

  const updateUsername = (evt) => {
    setUsername(evt.target.value);
  };

  return (
    <div className="UsernameForm">
      <label htmlFor="username">Enter your username</label>
      <input
        type="text"
        placeholder="username"
        id="username"
        value={username}
        onChange={updateUsername}
      />
      <button>Submit</button>
    </div>
  );
}
export default UsernameForm;
