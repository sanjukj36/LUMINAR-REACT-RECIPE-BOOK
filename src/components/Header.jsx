import React, { useEffect } from 'react'
import { Button, ButtonGroup, Col, FloatingLabel, Form, InputGroup, Modal, Navbar, Row, ToggleButton } from 'react-bootstrap'
import { useState } from 'react';
import { getAllRecipeAPI, uploadRecipeAPI } from '../services/allAPI';
// import "../bootstrap.min2.css"


function Header() {
    const [uploadRecipe, setUploadRecipe] = useState({
        caption: "", imageURL: "", RecipeDetail: ""

    })
    const [show, setShow] = useState(false);
    const [scrolling, setScrolling] = useState(false);


    const handleClose = () => {
        setShow(false);
        setUploadRecipe("")
    };
    const handleShow = () => setShow(true);

    const handleUpload = async () => {
        const { caption, imageURL, RecipeDetail } = uploadRecipe
        if (caption && imageURL && RecipeDetail) {
            const recipeData = {
                ...uploadRecipe,
                type: radioValue // Add the selected radio value to the recipe data
            };
            const result = await uploadRecipeAPI(recipeData);
            // const result = await uploadRecipeAPI(uploadRecipe)
            if (result.status >= 200 && result.status < 300) {
                alert(`API Call Success.. ${result.data.caption} Recipe uploaded Successfully`)

            } else {
                alert("API Call Failed... Please try after some time!!!")
            }
            alert("Your Recipe is Success Created")
            await getAllRecipeAPI()
        } else {
            alert("Please fill the form Completely !!!")
        }
        console.log(caption, imageURL, RecipeDetail);
        // store upload video in http://localhost:3000/allRecipe

        handleClose()
    }

    const [radioValue, setRadioValue] = useState('1');

    const radios = [
        { name: 'Non-Veg', value: 'Non-Veg' },
        { name: 'Veg', value: 'Veg' },
        { name: 'Sweets', value: 'Sweets' },
        { name: 'Drinks', value: 'Drinks' },
        

    ];
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
   

    const handleScroll = () => {
        console.log("Scrolling...", window.scrollY);
    if (window.scrollY > 0) {
        setScrolling(true);
    } else {
        setScrolling(false);
    }
    };

   

    return (
        <>
            <Navbar className={`bg-body-Primary justify-content-between shadow`} style={{ position: scrolling ? 'fixed' : 'relative', top: 0, left: 0, width: '100%', zIndex: 1000 }}>

                <Navbar.Brand className='text-primary ms-2' href="#home"><h3><i className="fa-solid fa-bowl-food fa-fade"></i> RecipE BooK <i className="fa-solid fa-book fa-fade"></i></h3> </Navbar.Brand>

                <Row>
                    <Col xs="auto" className='mt-1'><h4><a className='text-dark-emphasis' href='#home'>Home</a></h4></Col>
                    <Col xs="auto" className='mt-1'><h4><a className='text-warning' href='#Sweet'>Sweets</a></h4></Col>
                    <Col xs="auto" className='mt-1'><h4><a className='text-danger' href='#Non-Veg'>Non-Veg</a></h4></Col>
                    <Col xs="auto" className='mt-1'><h4><a className='text-success' href='#Veg'>Veg</a></h4></Col>
                    <Col xs="auto" className='mt-1'><h4><a className='text-primary-emphasis' href='#Drinks'>Drinks</a></h4></Col>

                    <Col xs="auto">
                        <Button onClick={handleShow} className='me-3 ms-3 text-primary bg-body-secondary' type="submit">Add Your Recipe For As</Button>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Your Recipe</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <ButtonGroup>
                                        {radios.map((radio, idx) => (
                                            <ToggleButton
                                                key={idx}
                                                id={`radio-${idx}`}
                                                type="radio"
                                                variant={idx % 2 ? 'outline-success' : 'outline-danger'}
                                                name="radio"
                                                value={radio.value}
                                                checked={radioValue === radio.value}
                                                onChange={(e) => setRadioValue(e.currentTarget.value)}
                                            >
                                                {radio.name}
                                            </ToggleButton>
                                        ))}
                                    </ButtonGroup>

                                    <FloatingLabel controlId="floatingInput" label="Recipe Name" className="mb-3 mt-3">
                                        <Form.Control value={uploadRecipe.caption} onChange={e => setUploadRecipe({ ...uploadRecipe, caption: e.target.value })} type="text" placeholder="Recipe Name" />
                                    </FloatingLabel>

                                    <FloatingLabel controlId="floatingInput" label="Image URL" className="mb-3">
                                        <Form.Control value={uploadRecipe.imageURL} onChange={e => setUploadRecipe({ ...uploadRecipe, imageURL: e.target.value })} type="text" placeholder="Recipe Name" />
                                    </FloatingLabel>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Your Recipe</Form.Label>
                                        <Form.Control value={uploadRecipe.RecipeDetail} onChange={e => setUploadRecipe({ ...uploadRecipe, RecipeDetail: e.target.value })} as="textarea" rows={9} />
                                    </Form.Group>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={handleUpload}>
                                    Click Here To Create Your Recipe Card
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </Col>
                </Row>
            </Navbar>
        </>
    )
}

export default Header
