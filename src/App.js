import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Layout/Navbar';
import Dashboard from './Components/Dashboard/Dashboard';
import ProjectDetails from './Components/Projects/ProjectDetails';
import SignIn from './Components/Auth/Signin'
import SignUp from './Components/Auth/SignUp'
import CreateProject from './Components/Projects/CreateProject';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Dashboard}/>
        <Route path='/project/:id' component={ProjectDetails}/>
        <Route exact path='/signin' component={SignIn} />
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/create' component={CreateProject} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
