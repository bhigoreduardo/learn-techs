import { useState, useEffect } from "react";

import "./Message.css";

const Message = ({ type, message, timer }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!message) {
      setIsVisible(false);
      return;
    }

    setIsVisible(true);
    const timming = setTimeout(() => setIsVisible(false), timer);
    return () => clearTimeout(timming);
  }, [message]); // eslint-disable-line react-hooks/exhaustive-deps

  return <>{isVisible && <p className={`message ${type}`}>{message}</p>}</>;
};
export default Message;
