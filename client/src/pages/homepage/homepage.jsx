import React from 'react';
import './hompepage.styles.scss';

const HomePage = () => {
  return (
    <div className="container">
      <h1 className="z-depth-3">Buttons</h1>
      <button className="btn">Read More</button>
      <button className="btn waves-effect  light-blue lighten-2">
        <i className="material-icons ">cloud</i> Decks
      </button>
      <a class="waves-effect waves-light btn">
        <i class="material-icons left">cloud</i>button
      </a>
      <br />
      {/* Floating button */}
      <a href="" className="btn-floating red btn-medium">
        <i className="material-icons">add</i>
      </a>
      {/* Fixed Action Button */}
      <div className="fixed-action-btn">
        <a href="#" className="btn-floating red btn-medium">
          <i className="material-icons">mode_edit</i>
        </a>
        <ul>
          <li>
            <a href="\" className="btn-floating green btn-medium">
              <i className="material-icons">insert_chart</i>
            </a>
          </li>
          <li>
            <a href="\" className="btn-floating yellow btn-medium">
              <i className="material-icons">format_quote</i>
            </a>
          </li>
          <li>
            <a href="\" className="btn-floating blue btn-medium">
              <i className="material-icons">publish</i>
            </a>
          </li>
          <li>
            <a href="\" className="btn-floating red btn-medium">
              <i className="material-icons">attach_file</i>
            </a>
          </li>
        </ul>
      </div>
      {/* FLAT BUTTON */}
      <a class="waves-effect waves-teal btn-flat">Button</a>
      {/* alignment */}
      <div className="left-align">
        <h3>some Text for alignment</h3>
      </div>
      <div className="right-align">
        <h3>some Text for alignment</h3>
      </div>
      <div className="center-align">
        <h3>some Text for alignment</h3>
      </div>
      {/* quick floats */}
      <div className="left">left float</div>
      <div className="right">right float</div>
      {/* clear */}
      <div className="clearfix"></div>
      {/* hide content */}
      <div className="hide">Hidden for all devices</div>
      <div className="hide-on-small-only">hide-on-small-only</div>
      <div className="hide-on-med-only">hide-on-med-only</div>
      <div className="hide-on-med-and-down">hide-on-med-and-down</div>
      <div className="hide-on-med-and-up">hide-on-med-and-up</div>
      <div className="hide-on-large-only">hide-on-large-only</div>
      <div className="" style={{ height: 500 }}></div>
      {/* hoverable */}
      <div className="red white-text hoverable">Hoverable content</div>
      {/* PULSE */}
      <div className="blue white-text pulse">Pulse Content</div>

      {/* Shadow */}
      <p className="z-depth-3">Duppppa</p>
    </div>
    // end of container
  );
};

export default HomePage;
