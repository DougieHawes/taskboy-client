import axios from "axios";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Route1 } from "../../utils/routes";

import { Button1 } from "../../utils/buttons";
import { Input1 } from "../../utils/inputs";

import "./style.scss";

const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

const SignUp = ({ onClick }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [passwordOn, setPasswordOn] = useState(true);

  const { username, email, password, confirmPassword } = formData;

  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
    } catch (error) {
      console.log(error.message);
    }
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
          <div className="auth-toggle">
            already signed up? click{" "}
            <div className="auth-toggle-text" onClick={onClick}>
              HERE
            </div>
          </div>
        </>
      }
      title="SIGN-UP"
    />
  );
};

export default SignUp;
