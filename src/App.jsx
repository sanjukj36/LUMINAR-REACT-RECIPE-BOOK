
import { Button, Col, FloatingLabel, Form, InputGroup, Modal, Navbar, Row } from 'react-bootstrap'
import './App.css'
import { useState } from 'react';
import Header from './components/Header';
import View from './components/View';


function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
    <Header/>
      
  
      <div className="container">
        <View/>
      </div>



    </>
  )
}

export default App
