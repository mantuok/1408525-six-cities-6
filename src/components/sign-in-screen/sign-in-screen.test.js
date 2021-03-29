import React from 'react';
import {render, screen} from '@testing-library/react';
import SignInScreen from './sign-in-screen';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import userEvent from '@testing-library/user-event';

describe(`SignInScreen renders and works correctly`, () => {
  const history = createMemoryHistory();
  const mockCallback = jest.fn();
  const mockStore = configureStore()({});

  it(`SignInScreen should render correcty`, () => {
    render(
        <redux.Provider store={mockStore}>
          <Router history={history}>
            <SignInScreen onLoginSuccess={mockCallback} />
          </Router>
        </redux.Provider>
    );
    expect(screen.getByText(`Amsterdam`)).toBeInTheDocument();
    expect(screen.getByText(`E-mail`)).toBeInTheDocument();
    expect(screen.getByText(`Password`)).toBeInTheDocument();
  });

  it(`SignInScreen form should work correctly`, () => {
    render(
        <redux.Provider store={mockStore}>
          <Router history={history}>
            <SignInScreen onLoginSuccess={mockCallback} />
          </Router>
        </redux.Provider>
    );

    userEvent.type(screen.getByTestId(`email`), `johndoe@gmail.com`);
    userEvent.type(screen.getByTestId(`password`), `12345`);

  });
});
