import Header from './Components/Header';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './App.css';
import AddStudent from './Components/AddStudent';
import List from './Components/List';
import Update from './Components/Update';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Router>
        <Switch>
          <Route path="/" exact component={List}></Route>
          <Route path="/add" component={AddStudent}></Route>
          <Route path="/update" component={Update}></Route>
        </Switch>
     </Router>
    </div>
  );
}

export default App;
