//import logo from './logo.svg';
import { useState } from 'react';

import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
//import About from './components/About';

function App() {
 const [mode , setmode] = useState('light')

 const [Text , setText] = useState('Enable dark mode')

        const togglemode = () =>{
          if(mode==='light'){
            setmode('dark');
            setText('Enable light mode');
            document.body.style.backgroundColor='grey';
          }
          else{
            setmode('light');
            setText('Enable dark mode');
            document.body.style.backgroundColor='white';
          }
        }
  return (
    <>
    <Navbar mode={mode} text={Text} toggle={togglemode}/>
    <TextForm mode={mode}/>
    <Alert/>
    </>
     
  );
}

export default App;
