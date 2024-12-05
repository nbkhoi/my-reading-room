import React from "react";
import "./Header.css";

const Header: React.FC<{ title: string }> = ({ title }) => (
  <header className="header">
    <h1>{title}</h1>
  </header>
);

export default Header;
