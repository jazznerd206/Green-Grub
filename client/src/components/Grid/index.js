import React from "react";
import "./style.css";

export function Row({ children }) {
    return <div className>{children}</div>;
  }

export function Col({ children }) {
  return (
    <div className>
      {children}
    </div>
  );
}
