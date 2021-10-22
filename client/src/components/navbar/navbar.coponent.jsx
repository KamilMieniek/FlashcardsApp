import React from 'react';

const NavBar = () => {
  return (
    <nav>
      <div className="nav-wrapper transparent">
        <a href="" className="brand-logo">
          Logo
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
