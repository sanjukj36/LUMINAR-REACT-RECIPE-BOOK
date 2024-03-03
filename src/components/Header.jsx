import React from 'react'
import { Button, ButtonGroup, Col, FloatingLabel, Form, InputGroup, Modal, Navbar, Row, ToggleButton } from 'react-bootstrap'
import { useState } from 'react';
import { getAllRecipeAPI, uploadRecipeAPI } from '../services/allAPI';
// import "../bootstrap.min2.css"



function Header() {
    const [uploadRecipe, setUploadRecipe] = useState({
        caption: "", imageURL: "", RecipeDetail: ""

    })
    const [show, setShow] = useState(false);

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


    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('1');

    const radios = [
        { name: 'Non-Veg', value: 'Non-Veg' },
        { name: 'Veg', value: 'Veg' },
        { name: 'Drinks', value: 'Drinks' },
        { name: 'Sweets', value: 'Sweets' },

    ];

    return (
        <>
            <Navbar className="bg-body-Primary justify-content-between shadow">
                <Navbar.Brand className='text-primary ms-2' href="#home"><h3><i className="fa-solid fa-bowl-food fa-fade"></i> RecipE BooK <i class="fa-solid fa-book fa-fade"></i></h3> </Navbar.Brand>

                <Row>
                    <Col xs="auto">
                        <Button onClick={handleShow} className='me-5 text-primary bg-body-secondary' type="submit">Write your Recipe for as</Button>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Fill The Following For Your Recipe</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <FloatingLabel controlId="floatingInput" label="Recipe Name" className="mb-3">
                                        <Form.Control value={uploadRecipe.caption} onChange={e => setUploadRecipe({ ...uploadRecipe, caption: e.target.value })} type="text" placeholder="Recipe Name" />
                                    </FloatingLabel>

                                    <FloatingLabel controlId="floatingInput" label="Image URL" className="mb-3">
                                        <Form.Control value={uploadRecipe.imageURL} onChange={e => setUploadRecipe({ ...uploadRecipe, imageURL: e.target.value })} type="text" placeholder="Recipe Name" />
                                    </FloatingLabel>


                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Example Your Recipe</Form.Label>
                                        <Form.Control value={uploadRecipe.RecipeDetail} onChange={e => setUploadRecipe({ ...uploadRecipe, RecipeDetail: e.target.value })} as="textarea" rows={9} />
                                    </Form.Group>

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
