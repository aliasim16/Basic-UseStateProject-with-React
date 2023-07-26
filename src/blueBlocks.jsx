import { UseState } from "./UseState";


function BlueBlocks(){
    
    const[count,handleCount]=UseState()
        
    return(
        <>
        <div className="redBlocks" style={{backgroundColor: "blue",
            height:"200px",
            width:"200px",
            margin:"10px",
            display:"inline-flex",
            alignItems:"center", 
            justifyContent:"center",
            
            //display:"inline"
        }} >
        <h1 style={{color:"white",padding:"10px",fontSize:"40px",}} > {count}  </h1>

        </div>
        <button id="blue" style={{padding:"15px 15px",fontSize:"20px"}} onClick={handleCount}  >
            EkleBlue
        </button>

        </>
    )
}

export default BlueBlocks;