import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import i18n from './pages/i18n';

class App extends PureComponent {
  render() {
    return (
      <Router>
        <Route path='/i18n' exact component={i18n} />
      </Router>
    );
  }
}

export default App;
