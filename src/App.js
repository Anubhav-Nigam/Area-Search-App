import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './AppCss.css';

import AppBody from './AppBody.js';

class App extends Component {

  componentDidMount() {
    ReactDOM.render(<AppBody />, document.getElementById('area-search-app-body'));
  }

  render() {
    return (
      <div>
        <div className="area-search-app-header container-fluid">
          <h2>
            Area Search App
          </h2>
        </div>

        <div id="area-search-app-body" className="area-search-app-body container-fluid">

        </div>
      </div>
    );
  }
}

export default App;
