import React, {Component} from 'react';
import Home from './containers/Home/Home';
import {AppLayout} from './components/AppLayout/AppLayout';
import {Route, Switch, withRouter} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <AppLayout>
        <Switch>
          <Route path="/" component={Home}/>
        </Switch>
      </AppLayout>
    );
  } 
}
export default withRouter(App);