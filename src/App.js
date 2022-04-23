// IMPORTS
import './App.css';
import TopBar from './components/TopBar';
import styled from 'styled-components';

// FUNCTIONAL COMPONENT
export default function App() {
  // VANILLA JS SECTION


  // JSX SECTION
  return (
    <div className="App">
      <Header>
        <TopBar />
      </Header>
      <h1>Hello World</h1>
    </div>
  );
}


// STYLED COMPONENTS
const Header = styled.div`
  height: 150px;
`

