import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')

      document.body.style.backgroundColor = '#343a40'
      document.body.style.color = 'white'
      showAlert("Dark mode has been enabled", "success")
      // document.title = "Dark mode"

    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")

      // document.title = "Light Mode"

    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">

          {/* <Routes>
          <Route path="/about">
            <About />
          </Route>

          <Route path="/">
            <TextForm alert={alert} heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />

          </Route>
        </Routes> */}
          {/* 
/users --> component 1
/users/home --> component 2 */}
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm alert={alert} heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />} />
          </Routes>



        </div>
      </Router>
    </>
  );
}

export default App;
