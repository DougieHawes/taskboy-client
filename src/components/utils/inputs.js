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
        P
      </div>
    )}
  </div>
);
