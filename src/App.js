import "./App.scss";
import About from './components/About'
import Clinical from './components/Clinical'
import Community from './components/Community'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/Home'
import Mobile from './components/Mobile'
import Navbar from './components/Navbar'
import Virtual from './components/Virtual'
// import { About, Clinical, Community, Contact, Footer, Home, Mobile, Navbar, Virtual } from './components/'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      
      <Navbar />
      <div className="container">
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={About}  path="/about" />
        <Route component={Clinical}  path="/clinical" />
        <Route component={Community}  path="/community" />
        <Route component={Contact}  path="/contact" />
        <Route component={Mobile}  path="/mobile" /> */}
        <Route component={Virtual}  path="/virtual" />
      </Switch>
      </div>
      <Footer className="Footer"/>

    </div>
    </Router>
  );
}

export default App;
