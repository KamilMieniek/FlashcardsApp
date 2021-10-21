import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../search/search.component';
import './header.styles.scss';
// import { ReactComponent as Logo } from '../../assets/crown.svg';
const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <span className="app-icon"></span>
        <p className="app-name">FlashCards</p>
        {/* search here */}
        <Search />
      </div>
      <div className="header-right">
        <button className="add-btn" title="Create new Deck">
          <svg
            className="btn-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-plus"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </button>
        <button className="notification-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-bell"
          >
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
        </button>
        <button className="profile-btn">
          <img src="https://assets.codepen.io/3306515/IMG_2025.jpg" />
          <span>Aybüke C.</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
