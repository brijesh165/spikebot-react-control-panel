import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import './App.css';

// Pages
import LoginPage from './Pages/LoginPage/LoginPage';
import HomePage from './Pages/HomePage/HomePage';
import Header from './Components/Header/Header';

const App = (props) => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch();
  // }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" render={() => (
            <HomePage />
          )} />

        <Route path="/login" render={() => (
          <LoginPage />
          )} />
      </Switch>
    </div>
  );
}

export default App;
