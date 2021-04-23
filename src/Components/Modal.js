import React, { useRef, useEffect } from "react";

export default function Modal({ setModal, handleKeyDown, show, children }) {
  const containerRef = useRef(null);
  useEffect(() => {
    if (show) {
      containerRef.current.focus();
    }
  }, [show]);
  return (
    <div
      ref={containerRef}
      onKeyDown={(e) => {
        handleKeyDown(e.key);
      }}
      tabIndex="0"
      onClick={() => setModal(!show)}
    >
      <div
        style={{
          display: show ? "block" : "none",
          position: "fixed",
          top: 0,
          left: 0,
          width: "50%",
          height: "100vh",
          background: "rgba(0, 0, 0, 0.6)",
          marginLeft: "20vw",
        }}
      >
        <section className="modal-main">{children}</section>
      </div>
    </div>
  );
}
