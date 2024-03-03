
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
    <div className='container mt-2 text-center'>
      <p>Explore mouthwatering recipes contributed by cooks and users just like you!</p></div>
   
      
  
      <div className='container p-3' style={{backgroundColor:"black"}}>
        <View/>
      </div>



    </>
  )
}

export default App
