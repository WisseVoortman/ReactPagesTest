import React from 'react';
import './App.css';
import ConnectedForceGraph from './components/ConnectedForceGraph';
import ConnectedSearch from './components/ConnectedSearch'
import ConnectedDataSourceDropdown from './components/ConnectedDataSourceDropdown'

import { Provider } from 'react-redux'

//devtools
import DevTools from './containers/DevTools.jsx'

// create Redux store
import configureStore from './redux/store/index'

const store = configureStore()
const initialState = store.getState()

console.log('initializing store: ', store.getState())

const unsubscribe = store.subscribe(() => {
  //console.log('state changed: ', store.getState())
})

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
        {/* exclude devtools in production */}
        {(process.env.NODE_ENV !== 'production') && <DevTools />}
      </section>
    </div>
  </Provider>
);

export default App;
