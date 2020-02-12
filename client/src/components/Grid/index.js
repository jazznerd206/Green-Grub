import React from "react";
import "./style.css";

export function Row({ children }) {
    return <div className="row">{children}</div>;
  }

export function Col({ children }) {
  return (
    <div className="col-s12">
      {children}
    </div>
  );
}
