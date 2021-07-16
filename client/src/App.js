import React from 'react';
import './App.css';
import Homepage from './components/Homepage/Homepage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductsPage from './components/ProductsPage/ProductsPage';
import PageNotFound from './components/PageNotFound/PageNotFound';
import FormPage from './components/FormPage/FormPage';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/products" component={ProductsPage} />
          <Route exact path="/form" component={FormPage} />
          <Route exact path="*" component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
