import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Previewer} from './features/previewer/Previewer';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCFonFVdw2BfiWeTwfhnm-d2UC-JHa4_84",
  authDomain: "markdown-previewer-d0979.firebaseapp.com",
  projectId: "markdown-previewer-d0979",
  storageBucket: "markdown-previewer-d0979.appspot.com",
  messagingSenderId: "884993501495",
  appId: "1:884993501495:web:ade70b3f0bafc89c5192b2",
  measurementId: "G-HJMKE6QXNB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Previewer />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
