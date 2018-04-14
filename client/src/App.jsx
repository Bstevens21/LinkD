import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router,  Route} from 'react-router-dom'
import Home from './components/Home';
import Profile from './components/Profile';
import Settings from './components/Settings';
import Navbar from './components/CustomNav';
import PostComposer from './components/PostComposer'
import Signin from './components/Signin'
import Signup from './components/Signup'
import Post from './components/Post'
import Landing from './components/Landing'


class App extends Component {
  state = {
    response: ''
  };
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.message }))
      .catch(err => console.log(err));
  }
  callApi = async () => {
    const response = await fetch('/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };
  render() {
    return (
      <Router>
          <div>
             <Navbar />
              <Route exact path ="/" component={Landing} />
              <Route path ="/home" component ={Home} />
              <Route path ="/signin" component ={Signin} />
              <Route path ="/signup" component ={Signup} />
              <Route path ="/landing" component ={Landing} />
              
          </div>
      </Router>
    );
  }
}

export default App;
