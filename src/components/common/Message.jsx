import React from "react";
import { CSSTransition } from "react-transition-group";
import "../../styles/Message.css";

const Message = ({ visible, message }) => {
  return (
    <CSSTransition
      in={visible}
      timeout={300}
      classNames="message"
      unmountOnExit
    >
      <div className="fixed top-20 right-8 bg-blue-700 text-white font-poppins py-2 px-4 rounded-md shadow-md">
        {message}
      </div>
    </CSSTransition>
  );
};

export default Message;
