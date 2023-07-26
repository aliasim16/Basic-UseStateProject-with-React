import { useState } from "react"

  
export function UseState() {
    const initialCounter =0
    const [count, setCount] = useState(initialCounter)
    
    const handleCounterSwitch = (event) => {
    const target =  event.target.id

    switch(target) {
      case "red":
        setCount(count + 1)
        console.log("red")
        return
      case "blue":
        setCount(count +1)
        console.log("blue")
        return
      case"both":
        setCount(count + 1)
        return    
      
    }
  }
  return[count, handleCounterSwitch]
}