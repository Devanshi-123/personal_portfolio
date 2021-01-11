import React from 'react';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Contact from '../Contact/Contact';
import Project from "../Project/Projects";
import Blog from '../Blog/Blog';


function Home() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Project/>
      <Blog/>
      <Contact/>
     <Footer/>
    </div>
  );
}

export default Home;
