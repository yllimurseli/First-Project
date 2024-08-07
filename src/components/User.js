import React from 'react';
import { Data } from './data';
import './user.scss';
import Item from './Item';

const User = (props) => {
  return (
    <div className="user">
      {Data.map((props) => {
        return <Item title={props.title} description={props.description} />;
      })}
    </div>
  );
};

export default User;
