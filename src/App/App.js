import React, {Component} from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/Sections/Home/Home';
import About from './components/Sections/About/About';
import Team from './components/Sections/Team/Team';
import Blog from './components/Sections/Blog/Blog';
import Services from './components/Sections/Services/Services';
import Contact from './components/Sections/Contact/Contact';
import Tracker from './components/Tracker/Tracker';
import Mobile from './components/Mobile/Mobile';

class App extends Component {
  render() {
    return (
        <div className="container-fluid" style={{background: 'cyan'}}>
         {/*components*/}
          <Tracker/>
          <Mobile/>

          {/*sections*/}
          <Home/>
          <About/>
          <Team/>
          <Blog/>
          <Services/>
          <Contact/>
        </div>
    );
  }
}

export default App;
