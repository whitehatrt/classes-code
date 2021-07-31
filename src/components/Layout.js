import React from "react";
import Navb from "./Navb";

export default function Layout({ title, children }) {
  return (
    <>
     
        <title>{title}</title>
     
      <Navb></Navb>
      <div className="container">
      {children}
      </div>
    </>
  );
}
