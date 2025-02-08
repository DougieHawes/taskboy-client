import { Link } from "react-router-dom";

import "./style.scss";

export const Link1 = ({ text, to }) => (
  <p className="link link1">
    {text}
    <Link className="link-text link1-text" to={to}>
      HERE
    </Link>
  </p>
);
