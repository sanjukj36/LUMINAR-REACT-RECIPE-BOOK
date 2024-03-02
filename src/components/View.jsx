import React, { useEffect, useState } from 'react'
import { getAllRecipeAPI } from '../services/allAPI'
import { Col, Row } from 'react-bootstrap'
import RecipeCard from './RecipeCard'

function View() {
    const [allRecipe, setAllRecipe] = useState()

    const getAllRecipes = async () => {
        const result = await getAllRecipeAPI()
        if (result?.status == 200) {
            setAllRecipe(result.data);

        }
    }
// Card
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = async () => {
        setShow(true);
        // get video details
        // const { caption, youTubeLink } = displayData
        // let timeData = new Date()
        // let timeStamp = new Intl.DateTimeFormat('en-US', {
        //     year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit"
        // }).format(timeData)
        // console.log(timeStamp);
        // await saveHistory({ caption, youTubeLink, timeStamp })

    }
// Card end


    useEffect(() => {
        getAllRecipes()
    }, [allRecipe])

    return (
        <>
            <Row className='mt-3' droppable="true" onDragOver={e => dragOverView(e)} onDrop={e => handleCategoryVideo(e)} >
                {allRecipe?.length > 0 ? allRecipe?.map((recipe, index) => (
                    <Col key={index} className='border pt-2 mb-1 rounded' sm={12} md={6} lg={4}>
                        
                                                
                        <RecipeCard displayData={recipe}/>


                    </Col>

                )):
                    <div className="text-danger fw-bolder">No Videos are upload yet!!!</div>
                }
            </Row>

        </>
    )
}

export default View
