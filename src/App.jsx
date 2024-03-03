import { Carousel } from 'react-bootstrap';
import './App.css'
import Header from './components/Header';
import View from './components/View';
import { useEffect, useState } from 'react';
import { getAllRecipeAPI } from './services/allAPI';

function App() {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const [allRecipe, setAllRecipe] = useState()

    const getAllRecipes = async () => {
        const result = await getAllRecipeAPI()
        if (result?.status == 200) {
            setAllRecipe(result.data);
        }
    }
  
    useEffect(() => {
        getAllRecipes()
    }, [allRecipe])



  return (
    <>
      <Header />
      
      <Carousel id='home' style={{margin:'-15% 0% 0% 0%'}} >
          {allRecipe?.length > 0 ? allRecipe?.map((recipe, index) => (
            <Carousel.Item interval={1000} >
                <img style={{ height: '100vh' }}
                  className="d-block w-100"
                  src={recipe?.imageURL}
                  alt="First slide"
                />
                <Carousel.Caption>
                  {/* <h3 className='text-primary ms-2'>{recipe?.caption}</h3> */}
                  {/* <p className='text-primary ms-2'>{recipe?.RecipeDetail}</p> */}
                </Carousel.Caption>
          </Carousel.Item>
          )) :
          <div></div>
        }
          {/* <Carousel.Item interval={500}>
            <img style={{ height: '100vh' }}
              className="d-block w-100"
              src={'https://handletheheat.com/wp-content/uploads/2020/10/BAKERY-STYLE-CHOCOLATE-CHIP-COOKIES-9-637x637-1.jpg'}
              alt="First slide"
            />        <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img style={{ height: '100vh' }}
              className="d-block w-100"
              src={'https://handletheheat.com/wp-content/uploads/2020/10/BAKERY-STYLE-CHOCOLATE-CHIP-COOKIES-9-637x637-1.jpg'}
              alt="First slide"
            />        <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item> */}
        </Carousel>
      <div className='container mt-2 text-center '>
        
        <p>Explore mouthwatering recipes contributed by cooks and users just like you!</p></div>



      <div className='ms-4 me-4 p-3 rounded shadow' style={{ backgroundColor: "black" }}>
        <View />
      </div>





    </>
  )
}

export default App
