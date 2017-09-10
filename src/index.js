import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import cards from './reducers';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import * as Actions from './actions';

export default function configureStore(initialState) {
  return createStore(cards, initialState,

    applyMiddleware(thunk)
  );
}

const store = configureStore();
store.dispatch(Actions.getCards());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
