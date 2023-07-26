import BlueBlocks from './blueBlocks'
import RedBlocks from './redBlocks'
import { UseState } from './UseState'


function App() {

  const initialCounterState = 0
  
  const [counter,setTwoBlockCounter]= UseState(initialCounterState)
 


  return (
  <>
  

    {
      [...Array(counter)].map((_,index) => <RedBlocks  key={index} />  )
    }
    
    {       
      [...Array(counter)].map((_,index) => <BlueBlocks   key={index}  />  )
    } 


    <button id='both'  style={{ width:"100px", height:"50px", fontSize:"20px" }} onClick={setTwoBlockCounter}> 
      Ekle 
    </button> 
  </>
  )
}
export default App
