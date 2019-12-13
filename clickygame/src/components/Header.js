import React from "react";
// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            Clicky Game
          </li>
          <li className="nav-item">
            Current Score: {props.currentScore}  |  
          </li>
          <li className="nav-item">
            Top Score: {props.topScore}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
