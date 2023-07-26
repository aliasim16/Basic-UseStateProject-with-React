import { UseState } from "./UseState"


function RedBlocks(){

    const[count,handleCount] = UseState()
    
    return(
        <>
        <div className="redBlocks" style={{
            backgroundColor: "red" ,
            height:"200px",
            width:"200px",
            margin:"10px",
            display:"inline-flex",
            alignItems:"center", 
            justifyContent:"center"
            //display:"inline"
         }}>
        <h1 style={{color:"white",padding:"10px",fontSize:"40px",}}> {count} </h1>
            
        </div>
        <button id="red" style={{padding:"15px 15px",fontSize:"20px",}} onClick={handleCount} >
            EkleRed
        </button>
        </>
    )
}

export default RedBlocks 