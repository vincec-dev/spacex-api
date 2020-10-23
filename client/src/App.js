import React, {Component} from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './App.css';
import logo from './images/spacex-logo.jpg';
import Launches from './components/Launches';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
      <div className="container">
        <img 
          src={logo} alt="" 
          style={{height: 100, display: 'block', margin: 'auto'}}
        />
        <Launches />
      </div>
      </ApolloProvider>
    );
  }
}

export default App;
