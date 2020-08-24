import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import GadgetList from './pages/gadget-list';
import CartList from './pages/cart-list';
import NotFound from './pages/not-found';
import Header from './parts/header';

function App() {
  return (
    <div className="app-container">
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <Router>
            <Header />
            <Switch>
              <Route exact path="/" component={GadgetList} />
              <Route exact path="/cart" component={CartList} />
              <Route component={NotFound} />
            </Switch>
          </Router>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
