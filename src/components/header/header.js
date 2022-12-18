import React from "react";

import "./header.css";
const Header = ({ onServiceChange }) => {
  return (
    <div className="header d-flex">
      <h3>
        <a href="#">Star Wars</a>
      </h3>
      <ul className="d-flex">
        <li>
          <a href="#">People</a>
        </li>
        <li>
          <a href="#">Planet</a>
        </li>
        <li>
          <a href="#">Starships</a>
        </li>
      </ul>
      <button onClick={onServiceChange} className="btn btn-primary bt-sm">
        Change service
      </button>
    </div>
  );
};
export default Header;
