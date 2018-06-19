import React, { Component } from 'react';

import '../App.css';

const EpTag = (props) => (
      <span style={{ backgroundColor: props.c1, color: props.c2 }} className="Ep-tag">
          {props.text}
      </span>
);

export default EpTag;
