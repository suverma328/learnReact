import React from 'react';
import './UserOutput.css'

const userOutput = (props) => {
  return (
    <div className="UserOutput">
      <p>Username: {props.userName}. First paragraph!</p>
      <p>Second Paragraph</p>
    </div>
  );
};

export default userOutput;