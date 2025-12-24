import { useState } from "react";
import "./SignupForm.css";

export default function SignupForm() {
  const [formData, setFormData] = useState({firstName:"", lastName:"", password: ""});

  const updateFormData = (evt) => {
    setFormData((currData) => {
    return {...currData, [evt.target.name]:evt.target.value}
    });
  };

  
  const handleSubmit = () =>
    console.log(formData);

  return (
    <div className="SignupForm">
      <label htmlFor="firstName">Please enter your first name</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={updateFormData}
      />

      <label htmlFor="lastName">Please enter your last name</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={updateFormData}
      />

        <label htmlFor="password">Please enter your password</label>
      <input type="password" id="password" placeholder="Password" name="password" value={formData.password} onChange={updateFormData}/>

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
