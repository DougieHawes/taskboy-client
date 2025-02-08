import { Routes, Route } from "react-router-dom";

// layout
import Header from "./components/layout/Header";
// auth routes
import SignIn from "./components/routes/auth/SignIn";
import SignUp from "./components/routes/auth/SignUp";
// public routes
import Guide from "./components/routes/public/Guide";
// private
import Dashboard from "./components/routes/private/Dashboard";

import "./display/styles/style.scss";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Routes>
        {/* auth */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        {/* public */}
        <Route path="/guide" element={<Guide />} />
        {/* private */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default App;
