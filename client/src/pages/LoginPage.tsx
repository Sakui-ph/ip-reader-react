/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { LoginUser } from "../api/user";

export default function LoginPage() {
  const [inputFields, setInputFields] = useState({
    email: "",
    password: "",
  });

  const [submitting, setSubmitting] = useState(false);

  const handleInputChange = (e: any) => {
    setInputFields({ ...inputFields, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSubmitting(true);
  };

  useEffect(() => {
    if (submitting) {
      LoginUser(inputFields.email, inputFields.password).then((result) => {
        if (result) window.location.href = "/home";
      });
      setSubmitting(false);
    }
  }, [submitting, inputFields]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <p>Email</p>
          <input
            onChange={handleInputChange}
            value={inputFields.email}
            className="input"
            name="email"
            type="email"
          />
        </div>
        <div>
          <p>Password</p>
          <input
            onChange={handleInputChange}
            value={inputFields.password}
            className="input"
            name="password"
            type="password"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
