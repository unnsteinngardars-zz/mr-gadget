import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import store from './redux/store';
import GadgetList from './pages/gadget-list';
import GadgetListDetails from './pages/gadget-details';
import CartList from './pages/cart-list';
import NotFound from './pages/not-found';
import Header from './parts/header';
import Footer from './parts/footer';

function App() {
  return (
    <div className="app-container">
      <Provider store={store}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/gadgets" component={GadgetList} />
            <Route exact path="/gadgets/:id" component={GadgetListDetails} />
            <Route exact path="/cart" component={CartList} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
