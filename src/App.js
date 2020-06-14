import React from 'react';
import { Provider } from 'react-redux'
import store from './redux/store'
import './App.css';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer'
import CookieContainer from './components/CookieContainer';

function App() {
  return (
    //provider is at the top so store will reach every component
    <Provider store={store}>
      <div className="App">
        <HooksCakeContainer />
        <CakeContainer />
        <IceCreamContainer />
        <CookieContainer />
      </div>
    </Provider>
  );
}

export default App;
