import icon from "../../assets/icons/notification-icon.svg";

import "./styles.css";

function Button() {
  return (
    <>
      <div className="dsmeta-red-btn">
        <img src={icon} alt="Notificar" />
      </div>
    </>
  );
}

export default Button;
