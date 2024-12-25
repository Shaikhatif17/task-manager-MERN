import React from 'react'
import "./app.css"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";  
import Todo from './components/Todo';


function App() {
  const headstyle ={
    textAlign : "center"
  }
  return (
 
    <div>
      <h1 style={headstyle}></h1>
      <Router>
        <Routes>
          <Route path="/" element={<Todo/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
