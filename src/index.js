import React from 'react';
import ReactDOM from 'react-dom';
import {
  createStore,
  applyMiddleware
} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Router as BrowserRouter} from 'react-router-dom';
import App from './components/app/app';
import rootReducer from './store/root-reducer';
import {createApi} from './services/api';
import {setAuthorizationStatus} from './store/action';
import {AuthorizationStatus} from './const';
import {checkAuth} from './store/api-actions';
import browserHistory from './browser-history';

export const api = createApi(
    () => store.dispatch(setAuthorizationStatus(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter history={browserHistory}>
        <App />
      </BrowserRouter>
    </Provider>,
    document.querySelector(`#root`)
);
