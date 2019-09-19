import React from 'react';
import { test } from '../../network/api';
const fs = require("fs");

class I18n extends React.Component {
  componentDidMount() {
    test();
    console.log(fs);
    
  }
  
  render() {
    return (
      <p>I18n</p>
    )
  }
}

export default I18n;