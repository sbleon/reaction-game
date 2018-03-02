import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import GameContainer from './containers/GameContainer/GameContainer';

let store = createStore((state = { dots: {} }) => state);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <GameContainer />
      </Provider>
    );
  }
}
