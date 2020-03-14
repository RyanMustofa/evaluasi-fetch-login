import React from 'react';
import Dashboard from './container/Dashboard';
import Login from './container/Login';
import { Switch, Route } from 'react-router-dom';
import Detail from './container/Detail';

function App() {
  return (
    <div>
       <Switch>
           <Route path="/" exact component={Login} />
           <Route path="/dashboard" exact component={Dashboard} />
           <Route path="/dashboard/:i" exact component={Detail} />
       </Switch>
    </div>
  );
}

export default App;
