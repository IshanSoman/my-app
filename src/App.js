import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import About from './components/About';
import { useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [mode,setMode]=useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    },1500);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark Mode has been enabled","success");
      document.title="TextUtils-Dark Mode";
      // setInterval(() => {
      // document.title="Use textutils right now!";
        
      // }, 2000);
      // setInterval(() => {
      // document.title="Download TextUtils!!!";
        
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been enabled","success");
      document.title="TextUtils-Light Mode";

    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}></Navbar> 
    <Alert alert={alert}/>
    <div className="container my-3">
      {/* users--> Comp1
      users/home--> comp2 hence exact is necessary */}
      <Routes>
          <Route exact path="/about" element={<About/>} >
          </Route>
          <Route exact path="/" element={ <Textform showAlert={showAlert} heading="Enter the text to analyze!" mode={mode} />}>
          </Route>
      </Routes>
      {/* <Textform showAlert={showAlert} heading="Enter the text to analyze!" mode={mode} /> */}
      {/* <About/> */}
    </div>
    </Router>
    </>
  );
}

export default App;
