import axios from "axios";

import { useState, useEffect } from "react";

import "./style.scss";

const App = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchMessage = async () => {
      const response = await axios.get("http://localhost:5000/home");

      setMessage(response.data.msg);
    };

    fetchMessage();
  }, []);

  return <div>{message}</div>;
};

export default App;
