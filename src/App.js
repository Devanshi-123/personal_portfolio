import React from 'react';
import {HashRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import Home from './components/HomePage/HomePage';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import Skill from './components/Skills/Skills';
import Experience from './components/Experiences/experience';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Project/Projects';
import Blogs from './components/Blog/Blog';


function App() {
  return (
    <div className="App">
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/about' exact component={About}/>
        <Route path='/contact' exact component={Contact}/>
        <Route path='/skill' exact component={Skill}/>
        <Route path='/experience' exact component={Experience}/>
        <Route path='/projects' exact component={Projects}/>
        <Route path='/blogs' exact component={Blogs}/>
      </Switch>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
