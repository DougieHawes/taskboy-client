import { Routes, Route, Link } from "react-router-dom";

// layout
import Header from "./components/layout/Header";
// auth routes
import Auth from "./components/routes/auth/Auth";
// public routes
import Guide from "./components/routes/public/Guide";
// private
import Dashboard from "./components/routes/private/Dashboard";

import "./display/styles/style.scss";

const App = () => {
  return (
    <div className="app">
      <div className="screen">
        <Header />
        <Link to="/auth">DUMMY-LINK</Link>
        <Routes>
          {/* auth */}
          <Route path="/auth" element={<Auth />} />
          {/* public */}
          <Route path="/guide" element={<Guide />} />
          {/* private */}
          <Route path="/private/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
