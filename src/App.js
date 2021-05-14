import React from 'react';
import './App.css';
import  HomePage from "./pages/homepage/homepage.component";
import {Route, Switch} from 'react-router-dom'
function App() {

const HatsPage = ()=>(
 <div>
   <h1>Hats page </h1>
 </div>
);



  return (
    <div >
      <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/hats' component={HatsPage}/>

      
      </Switch>
    </div>
  );
}

export default App;
