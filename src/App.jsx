import './App.css'
import Navbar from './Components/Navbar/Navbar'
import PrieOptions from './Components/PriceOptions/PrieOptions'
import Linechart from './Components/Linechart/Linechart'
import Axios from './Components/Axios/Axios'
// import DaisyNav from './Components/DaisyNav/DaisyNav'

function App() {


  return (
    <>
    {/* <DaisyNav></DaisyNav> */}
    <Navbar></Navbar>
    <PrieOptions></PrieOptions>
    <h2 className='text-center font-bold text-7xl my-8'>Subject Mark</h2>
    <Linechart></Linechart>
    <Axios></Axios>
      
      {/* <h1 className='text-7xl'>React</h1> */}
 
     
        

    </>
  )
}

export default App
