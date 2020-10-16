import React from 'react';

const userInput = (props) => {
  const style = {
    border: '2px solid red'
  };
  return (
    <input style={style} type="text" onChange={props.changed} value={props.userName}/>
  );
};

export default userInput;