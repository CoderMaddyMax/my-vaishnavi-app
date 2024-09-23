import { useState } from 'react';
import './App.css';
import About from './components/About';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';

function App() {

  const [mode,setMode]=useState ('light');

  const toggleMode = () => {
    if (mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor='#1e2329';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
   
<NavBar title="TextUtils" aboutTextUtils="About TextUtils" mode={mode} toggleMode={toggleMode}></NavBar>

<div className='container'>
<TextForm heading="Enter the text to analyze below" mode={mode}></TextForm>
{/* <About></About> */}
</div>


    </>
  );
}

export default App;
