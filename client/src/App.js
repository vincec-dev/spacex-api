import React, {Component} from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import logo from './images/spacex-logo.jpg';
import Launches from './components/Launches';
import Launch from './components/Launch';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache()
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
      <Router>
        <div className="container">
          <Link to="/"><img 
            src={logo} alt="" 
            style={{width: '100%', maxWidth: "400px", height: 'auto', display: 'block', margin: 'auto'}}
          /></Link> 
          <Route exact path="/" component={Launches} />
          <Route exact path="/launch/:flight_number" component={Launch} />
        </div>
      </Router>
      </ApolloProvider>
    );
  }
}

export default App;
