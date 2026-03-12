import './App.css'
import { useState, useEffect } from 'react'
import ScorePage from "./Components/ScorePage"

function App() {

  const [toggle, setToggle] = useState(false)
  const [showScore, setShowScore] = useState(true) 

  const [score, setScore] = useState(8)
  const total = 10

  function handleToggle() {
    setToggle(prev => !prev)
  }

  useEffect(() => {
    document.body.style.backgroundColor = toggle ? "#313e51" : "#F4F6FA"
  }, [toggle])

  return (
    <>
      {showScore && (
        <ScorePage
          toggle={toggle}
          handleToggle={handleToggle}
          score={score}
          total={total}
        />
      )}
    </>
  )
}

export default App