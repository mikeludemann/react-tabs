import React from 'react';
import logo from './logo.svg';
import './App.css';

import Tabs from './components/tabs';

function App() {
	return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section className="content">
        <Tabs>
          <div label="Cologne">
            Welcome to Cologne
          </div>
          <div label="Berlin">
            Welcome to Berlin
          </div>
          <div label="Munich">
            Welcome to Munich
          </div>
        </Tabs>
      </section>
      <footer className="App-footer">
        (c) Copyright - Mike Ludemann
      </footer>
    </div>
	);
}

export default App;
