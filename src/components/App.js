import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import ErrorBoundary from './ErrorBoundary';

class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <div className="app">
          <Header />
          <Main />
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
