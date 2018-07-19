import React, {Component} from 'react';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import signup from './services/Signup';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

class Routes extends Component{
    
    render(){
        return(
            <Router>
                <main>
                    <Nav/>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/login' component={Login}/>
                    <Route exact path='/signup' component={Signup}/>
                </main>
            </Router>
        )
    }

}

export default Routes;
