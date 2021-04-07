import './App.css';
import {
  Switch,
  Route
} from "react-router-dom";
import Header from "./components/header/header.component";
import Home from './components/home/home.component';
import Portfolio from './components/portfolio/portfolio.component';
import Contact from './components/contact/contact.component';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/portfolio" component={Portfolio}/>
      <Route path="/contact" component={Contact}/>
      </Switch>
    </div>
  );
}

export default App;
