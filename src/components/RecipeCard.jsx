import React, { useState } from 'react'
import { Card, Modal } from 'react-bootstrap';
import { removeRecipeAPI } from '../services/allAPI';
import "../bootstrap.min3.css"

function RecipeCard({ displayData }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = async () => {
        setShow(true);
    }
    const deleteRecipe=async(recipeId)=>{
        await removeRecipeAPI(recipeId)
    }


    return (
        <>
            <Card className='p-2 mb-2'>

                <Card.Img onClick={handleShow} variant="top" height={"300px"} src={displayData?.imageURL} />
                <Card.Body>
                    <Card.Title>
                        <div className='d-flex justify-content-between'>
                            <p>{displayData?.caption}</p>

                            <button className='btn fs-5' onClick={() => deleteRecipe(displayData?.id)} ><i className='fa-solid fa-trash text-danger'></i></button>
                        </div>

                        {/* {!insideCategory && <button className='btn' onClick={() => deleteVideo(displayData?.id)} ><i className='fa-solid fa-trash text-danger'></i></button>} */}


                    </Card.Title>

                </Card.Body >
            </Card>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className='center-all'>{displayData?.caption}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Card.Img onClick={handleShow} variant="top" height={"300px"} src={displayData?.imageURL} />

                    {/* <img variant="top" className='center-all' height={"250px"} src={displayData?.imageURL} alt="" /> */}
                    <p className='mt-3'>{displayData?.RecipeDetail}</p>

                    {/* <iframe width="100%" height="400" src="https://www.youtube.com/embed/V6zutPpGavg?si=QQJKkfv_Goya_q4S?autoplay=1" title="caption" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */}
                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>


        </>
    )
}

export default RecipeCard
