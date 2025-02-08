import { useState } from "react";

import { Route1 } from "../../utils/routes";

import { Button1 } from "../../utils/buttons";
import { Input1 } from "../../utils/inputs";
import { Link1 } from "../../utils/links";

import "./style.scss";

const SignUp = ({ onClick }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [passwordOn, setPasswordOn] = useState(true);

  const { email, password } = formData;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Route1
      content={
        <>
          <Input1
            name="email"
            onChange={handleChange}
            placeholder="enter email..."
            type="email"
            value={email}
          />
          <Input1
            name="password"
            onChange={handleChange}
            onClick={() => setPasswordOn(!passwordOn)}
            password={true}
            passwordOn={passwordOn}
            placeholder="enter password..."
            value={password}
          />
          <Button1 onClick={handleSubmit} text="SUBMIT" />
          <div className="auth-toggle">
            not yet signed up? click{" "}
            <div className="auth-toggle-text" onClick={onClick}>
              HERE
            </div>
          </div>
        </>
      }
      title="SIGN-IN"
    />
  );
};

export default SignUp;
