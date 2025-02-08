import "./style.scss";

// AUTH
export const Route1 = ({ content, title }) => {
  return (
    <div className="route route1">
      <h2 className="route-title">{title}</h2>
      <div className="route-content">
        <form className="route-form">{content}</form>
      </div>
    </div>
  );
};

// PUBLIC
export const Route2 = ({ content, title }) => {
  return (
    <div className="route route2">
      <h2 className="route-title">{title}</h2>
      <div className="route-content">{content}</div>
    </div>
  );
};

// PRIVATE
export const Route3 = ({ content, title }) => {
  return (
    <div className="route route3">
      <h2 className="route-title">{title}</h2>
      <div className="route-content">{content}</div>
    </div>
  );
};
