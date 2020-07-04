import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Register from './pages/RegisterPage';
import UsersPage from './pages/UsersPage';

import Header from './components/Header';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/users" component={UsersPage} />

      {/* <Route path="/movie/:id" component={MoviePageContainer} /> */}
    </div>
  );
};

export default App;
