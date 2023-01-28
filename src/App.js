import './App.css';
import styled from 'styled-components';
import Heading from './Heading';
import Details from './Details';
import Contact from './Contact';
import Projects from './Projects';

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
