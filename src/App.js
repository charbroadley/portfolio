import './App.css';
import styled from 'styled-components';
import Heading from './Heading';
import Details from './Details';
import Projects from './Projects';

const WholePage = styled.main`
  color: white;
  font-size: 1em;
  font-family: 'Roboto Condensed', sans-serif;
  background-color: #033220;
  margin: 0px;
  border: 0px;
`
// #024818

function App() {
  return (
    <WholePage>
      <Heading/>
      <Details/>
      <Projects/>
    </WholePage>
  );
}

export default App;
