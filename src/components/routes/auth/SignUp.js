import { useState } from "react";

import { Route1 } from "../../utils/routes";

import { Button1 } from "../../utils/buttons";
import { Input1 } from "../../utils/inputs";
import { Link1 } from "../../utils/links";

import "./style.scss";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [passwordOn, setPasswordOn] = useState(true);

  const { username, email, password, confirmPassword } = formData;

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
            name="username"
            onChange={handleChange}
            placeholder="enter username..."
            value={username}
          />
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
          <Input1
            name="confirmPassword"
            onChange={handleChange}
            onClick={() => setPasswordOn(!passwordOn)}
            password={true}
            passwordOn={passwordOn}
            placeholder="confirm password..."
            value={confirmPassword}
          />
          <Button1 onClick={handleSubmit} text="SUBMIT" />
          <Link1 text="already signed up? click " to="/signin" />
        </>
      }
      title="SIGN-UP"
    />
  );
};

export default SignUp;
