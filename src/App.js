// IMPORTS
import './App.css';
import TopBar from './components/TopBar';
import styled from 'styled-components';
import HeroPic from './components/HeroPic';
import StoreListings from './components/StoreListings';

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
      <StoreListings />
    </div>
  );
}


// STYLED COMPONENTS
const Header = styled.div`
  height: 150px;
`

