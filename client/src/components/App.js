import React, {Component} from 'react';
import '../styles/main.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './Header';
import {connect} from 'react-redux';
import * as actions from '../actions';
import History from './History';
import Landing from './Landing';
import Home from './home';
import Footer from './footer';

class App extends Component {

      componentDidMount() {
            this.props.fetchUser();
      }

      render() {
            return(
                  <div className="bodyHeight">
                        <Router>
                        <Header />
                              <Switch>
                                    <Route path="/" exact component={Landing} />
                                    <Route path="/Home" component={Home}/>  
                                    <Route path="/history" component={History} />
                              </Switch>
                        <Footer />
                        </Router>
                  </div>
            );
      }
}


export default connect(null, actions) (App);