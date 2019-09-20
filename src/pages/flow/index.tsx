import React from 'react';
import { intl } from '../../i18n/format';

class Flow extends React.Component {
  componentDidMount() {
    intl();
  }
  
  render() {
    return (
      <p>I18n</p>
    )
  }
}

export default Flow;