import React from 'react';
import data from './data/data.json';
import './App.css';
import ConnectedForceGraph from './components/ConnectedForceGraph';


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
        <ConnectedForceGraph />
      </section>
    </div>
  </Provider>
);

export default App;
