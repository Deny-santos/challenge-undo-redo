import { useState } from 'react'
import './App.css'

interface clickedProps{
  clientX: number,
  clientY: number,
}

function App() {

  const [cords, setCords] = useState<clickedProps[]>([])
  const [arrayFull, setArrayFull] = useState<clickedProps[]>([])



  const getCordenatios = (e: React.MouseEvent) => {
    const {clientX, clientY } = e

    setCords([...cords, {clientX, clientY}])
    console.log(cords)
    setArrayFull([...arrayFull, {clientX, clientY}])
  }


  function redo (){
    const newCords = [...cords]
    newCords.push(arrayFull[newCords.length])
    setCords([...newCords])
  }
  
  const undo = () => {
    const newCords = [...cords]
    newCords.pop()
    setCords([...newCords])
    console.log(cords)
  }

  return (
    <>
    {cords.length === 0 ? (
      <h1>click na tela</h1>
    ): ""}
    <span>
      <button onClick={undo} disabled={cords.length === 0}>undo</button>
      <button disabled={cords.length > 0 ? cords.length == arrayFull.length ? true : false : false || arrayFull.length == 0} onClick={redo} >redo</button>
    </span>
    <div onClick={getCordenatios} className="App">
      {cords.map((cord, index) => (
        <span key={index} style={{
          top: cord.clientY -10,
          left: cord.clientX -10,
          backgroundColor: "red",
          borderRadius: "50%",
          position: "absolute",
          width: "20px",
          height: "20px"
        }}></span>
      ))
    }
    </div>
    
    </>
  )
}

export default App
