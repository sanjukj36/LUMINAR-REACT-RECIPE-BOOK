import './App.css'
import Header from './components/Header';
import View from './components/View';


function App() {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);


  return (
    <>
    <Header/>
    <div className='container mt-2 text-center'>
      <p>Explore mouthwatering recipes contributed by cooks and users just like you!</p></div>
   
      
  
      <div className='m-2 p-3' style={{backgroundColor:"black"}}>
        <View/>
      </div>



    </>
  )
}

export default App
