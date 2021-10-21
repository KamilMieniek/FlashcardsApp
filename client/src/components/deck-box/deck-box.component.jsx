import React from 'react';
import '../deck-grid/deck-grid.styles.scss';
const DeckBox = ({ title, cardsCount, progress, date, ...props }) => {
  const actualProgress = progress ? progress : '0%';
  const dateOfCreation = date ? date : new Date().toDateString();

  return (
    <div className="project-box-wrapper">
      <div className="project-box" style={{ background: '#c8f7dc' }}>
        <div className="project-box-header">
          <span>{dateOfCreation}</span>
          <div className="more-wrapper">
            <button className="project-btn-more">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                class="feather feather-more-vertical"
              >
                <circle cx="12" cy="12" r="1" />
                <circle cx="12" cy="5" r="1" />
                <circle cx="12" cy="19" r="1" />
              </svg>
            </button>
          </div>
        </div>
        <div className="project-box-content-header">
          <p className="box-content-header">{title}</p>
          <p className="box-content-subheader">
            Cards: {cardsCount ? cardsCount : 0}
          </p>
        </div>
        <div className="box-progress-wrapper">
          <p className="box-progress-header">Progress</p>
          <div className="box-progress-bar">
            <span
              className="box-progress"
              style={{ width: actualProgress, background: '#34c471' }}
            ></span>
          </div>
          <p className="box-progress-percentage">{actualProgress}</p>
        </div>
        <div className="project-box-footer">
          <div className="participants">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
              alt="participant"
            />
            <img
              src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
              alt="participant"
            />
            <button className="add-participant" style={{ color: '#34c471' }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                class="feather feather-plus"
              >
                <path d="M12 5v14M5 12h14" />
              </svg>
            </button>
          </div>
          <div className="days-left" style={{ color: '#34c471' }}>
            2 Days Left
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeckBox;
