import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Nomatch from './components/Nomatch/Nomatch';
import Header from './components/Header/Header';
import PostData from './components/PostData.js/PostData';


function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/home">
            <Home></Home>
        </Route>
        <Route exact path="/">
            <Home></Home>
        </Route>
        <Route path="/post/:postid">
            <PostData></PostData>
        </Route>
        <Route path="*">
            <Nomatch></Nomatch>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
