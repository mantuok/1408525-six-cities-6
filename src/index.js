import React from 'react';
import ReactDOM from 'react-dom';
import {
  createStore,
  applyMiddleware
} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import App from './components/app/app';
import reviews from './mocks/reviews';
import {reducer} from './store/reducer';
import {createApi} from './services/api';

const api = createApi(() => console.log(`unauthorized access`))

const store = createStore(
    reducer,
    composeWithDevTools(
      applyMiddleware(thunk.withExtraArgument(api))
    )
);

ReactDOM.render(
    <Provider store={store}>
      <App
        reviews={reviews}
      />
    </Provider>,
    document.querySelector(`#root`)
);
