// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from 'styled-components';
// import NavBar from "./NavBar";
import Heading from './components/Heading.js'
import Details from './components/Details.js'
import Projects from './components/Projects.js'
import Contact from './components/Contact.js'

const WholePage = styled.main`
  color: white;
  font-size: 1.1em;
  font-family: 'Roboto Condensed', sans-serif;
  background-color: #033220;
`
// #024818

function App() {
  return (

      <WholePage>
        <Heading/>
        <Details/>
        <Projects/>
        <Contact/>
      </WholePage>
  );
}

export default App;
