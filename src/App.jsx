import React from 'react';
import { BrowserRouter , Route,Switch } from 'react-router-dom'; 
import LoginPage from './LoginPage/LoginPage';
import HomePage from './HomePage/Home';

function App() {
  return (
    <div>
       <BrowserRouter>
       <Switch>
           <Route exact path="/" component={LoginPage} />
           <Route exact path="/home" component={HomePage} />
        </Switch>
       </BrowserRouter>
    </div>
  );
}

export default App;
