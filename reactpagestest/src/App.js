import React from 'react';
import './App.css';
import ConnectedForceGraph from './components/ConnectedForceGraph';
import ConnectedSearch from './components/ConnectedSearch'
import ConnectedDataSourceDropdown from './components/ConnectedDataSourceDropdown'

import { Provider } from 'react-redux'

// create Redux store
import store from './redux/store'

const App = () => (
  <Provider store={store}>
    <div className="App">
      <header className="App-header">
        Force Graph Example
      </header>
      <section className="Main">
        <ConnectedSearch />
        <ConnectedDataSourceDropdown />
        <ConnectedForceGraph />

      </section>
    </div>
  </Provider>
);

export default App;
