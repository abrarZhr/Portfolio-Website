import './App.css';
import Header from './Header/Header';
import Intro from './intro/Intro';
import Services from './Services/Services';
import Experience from './Experience/Experience'
import {themeContext} from './context'
import { useContext } from 'react';


function App() {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
    style={{
      background : darkMode? 'black': '',
      color : darkMode? 'white' :'',
    }}
    
    
    >
    <Header/>
    <Intro/>
    <Services/>
    <Experience/>
    
    
    </div>
  );
}

export default App;
