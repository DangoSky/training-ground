import React from 'react';
import { intl } from '../../i18n/format';

class Flow extends React.Component {
  componentDidMount() {
    document.title = intl('title');
  }
  
  render() {
    return (
      <div>
        <h2>根据 pathname 匹配国际化文案, 只支持zh 和 en</h2>
        <p>{intl('hc')}</p>
        <p>{intl('slogan')}</p>
        <p>{intl('contact_us')}</p>
        <p>{intl('search_tip')}</p>
      </div>
    )
  }
}

export default Flow;