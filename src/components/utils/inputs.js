import { FaEye, FaEyeSlash } from "react-icons/fa";

import "./style.scss";

export const Input1 = ({
  name,
  onChange,
  onClick,
  password = false,
  passwordOn = false,
  placeholder,
  value,
}) => (
  <div className="input-container input1-container">
    <input
      className="input input1"
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      type={passwordOn ? "password" : "text"}
      value={value}
    />
    {password && (
      <div className="input-password-toggle" onClick={onClick}>
        {passwordOn ? <FaEye size={28} /> : <FaEyeSlash size={28} />}
      </div>
    )}
  </div>
);
