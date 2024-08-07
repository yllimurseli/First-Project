import React from 'react';
import { Data4 } from './data';
import './browsers.scss';

const Browsers = () => {
  return (
    <div className="browser-items">
      {Data4.map((props) => (
        <div className="item" key={props.name}>
          <div className="inline">
            <div className="logo">
              <img src={props.icon} alt={props.name} />
            </div>
            <h6>{props.name}</h6>
          </div>
          <p>{props.description}</p>
          <a className="btn" href={props.link}>{props.linkText}</a>
        </div>
      ))}
    </div>
  );
};

export default Browsers;
