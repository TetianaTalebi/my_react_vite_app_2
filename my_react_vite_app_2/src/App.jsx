import './App.css'
import Die from './Die'

function App() {
  

  return (
    <>
      <Die />
      <Die numSides={3} />
      <Die numSides={10} />
      <Die />
      <Die numSides={100} />
    </>
  )
}

export default App
