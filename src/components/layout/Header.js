import { Link } from "react-router-dom";

import "./style.scss";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <h1 className="header-title">TaskBoy</h1>
      </Link>
    </header>
  );
};

export default Header;
