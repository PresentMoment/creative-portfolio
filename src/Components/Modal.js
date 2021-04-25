import React, { useRef, useEffect } from "react";

import "./Styles/ModalStyle.css";

export default function Modal({ setModal, handleKeyDown, show, children }) {
  const containerRef = useRef(null);
  useEffect(() => {
    if (show) {
      containerRef.current.focus();
    }
  }, [show]);
  const handleClick = (e) => {
    if (e.target.id === "overlay") {
      setModal(false);
    } else {
      return;
    }
  };
  return (
    <div
      ref={containerRef}
      onKeyDown={(e) => {
        handleKeyDown(e.key);
      }}
      tabIndex="0"
    >
      <div
        className="Overlay"
        style={{
          display: show ? "block" : "none",
          position: "fixed",
          background: "rgba(0, 0, 0, 0.6)",
          textAlign: "center",
        }}
        id="overlay"
        onClick={(e) => handleClick(e)}
      >
        <div className="Container">{children}</div>
      </div>
    </div>
  );
}
