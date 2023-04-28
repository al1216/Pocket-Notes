import React from 'react';
import './Body.css';
import Left from './Left/Left.jsx';
// import Right from './Right/Right.jsx'

export default function Body() {
  return (
    <div className="container">
      <Left></Left>
      {/* <Right></Right> */}
    </div>
  )
}
