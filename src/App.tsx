import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import flow from './pages/flow';

class App extends PureComponent {
  render() {
    return (
      <Router>
        <Route path='/flow' exact component={flow} />
      </Router>
    );
  }
}

export default App;
