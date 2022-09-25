import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";

const App =()=> {
  const pageSize= 9;
  const country= 'in';

  return (
    <div>
      <Router>  
        <Navbar/>
          <Switch>
              
                {/* <Route exact path="/Entertainment"><News key="Entertainment"pageSize={pageSize} country={country}category="Entertainment" /></Route> */}
                <Route exact path="/Business"><News key="Business"pageSize={pageSize} country={country}category="Business"/></Route>
                <Route exact path="/Entertainment"><News key="Entertainment"pageSize={pageSize} country={country}category="Entertainment"/></Route>
                <Route exact path="/General"><News key="General"pageSize={pageSize} country={country}category="General"/></Route>
                <Route exact path="/Health"><News key="Health"pageSize={pageSize} country={country}category="Health"/></Route>
                <Route exact path="/Science"><News key="Science"pageSize={pageSize} country={country}category="Science"/></Route>
                <Route exact path="/Technology"><News key="Technology"pageSize={pageSize} country={country}category="Technology"/></Route>
                <Route exact path="/Sports"><News key="Sports"pageSize={pageSize} country={country}category="Sports"/></Route>
          </Switch>
      </Router>
    </div>
  )

 }
export default App