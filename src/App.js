import React from 'react';
import 'swiper/swiper.min.css';
import { Switch, Route } from 'react-router-dom';

import Error from './pages/Error';

import './App.css';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import ChatPage from './pages/ChatPage';
import ChatDet from './pages/ChatDet';


const App = () => {
  return (
    <>
      
        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/chat" component={ChatPage} />
          <Route exact path="/chat/:id" component={ChatDet} />




          
          <Route component={Error} />
        </Switch>
       
    </>
  );
};

export default App;
