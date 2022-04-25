// IMPORTS
import './App.css';
import TopBar from './components/TopBar';
import styled from 'styled-components';
import HeroPic from './components/HeroPic';

// FUNCTIONAL COMPONENT
export default function App() {
  // VANILLA JS SECTION


  // JSX SECTION
  return (
    <div className="App" style={{fontFamily: "sans-serif"}}>
      <Header>
        <TopBar />
      </Header>
      <HeroPic />
      <h1>Hello World</h1>
    </div>
  );
}


// STYLED COMPONENTS
const Header = styled.div`
  height: 150px;
`

