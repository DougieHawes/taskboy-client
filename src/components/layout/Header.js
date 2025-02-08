import { Link } from "react-router-dom";

import "./style.scss";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <h1>TaskBoy</h1>
      </Link>
    </header>
  );
};

export default Header;
