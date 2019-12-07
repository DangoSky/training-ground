import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import flow from './pages/flow';
import flow1 from './pages/flow1';
import flow2 from './pages/flow2';
import flow3 from './pages/flow3';

import StudentHome from './pages/oracle/student/home';
import adminHome from './pages/oracle/admin/home';

class App extends PureComponent {
  render() {
    return (
      <Router>
        <Route path='/flow/:name(zh|en)' exact component={flow}></Route>
        <Route path='/flow1' exact component={flow1}></Route>
        <Route path='/flow2' exact component={flow2}></Route>
        <Route path='/flow3' exact component={flow3}></Route>

        <Route path='/oracle/student' exact component={StudentHome}></Route>
        <Route path='/oracle/admin' exact component={adminHome}></Route>
      </Router>
    );
  }
}

export default App;
