
/*
(git remote add origin https://github.com/jbb26354/[repo].git)
  git pull
  git pull origin master
  git push
  git push --set-upstream origin master
*/

/*
  FIRST COMMIT: git remote add origin https://github.com/jbb26354/[repo].git
  git init
  git add .
  git commit -m "latest lecture"
  git push
*/

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
