import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Offers = [
  {id: 1},
  {id: 2},
  {id: 3},
  {id: 4}
];

ReactDOM.render(
    <App
      offers={Offers}
    />,
    document.querySelector(`#root`)
);
