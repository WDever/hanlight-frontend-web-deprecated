import * as React from 'react';
import { hot } from 'react-hot-loader';
// import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import AppComponent from './components/App';
// import { configureStore } from './store';

// const store = configureStore;

const Root: React.SFC<{}> = () => (
  // <Provider /* store={store} */>
  <BrowserRouter>
    <AppComponent />
  </BrowserRouter>
  // </Provider>
);

export default (process.env.NODE_ENV === 'development' ? hot(module)(Root) : Root);
