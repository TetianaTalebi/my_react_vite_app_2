import './App.css'
import ScoreKeeper2 from './ScoreKeeper2'

function App() {

  return (
    <>
      <ScoreKeeper2 />
      <br/>
      <ScoreKeeper2 targetNum={3} numOfPlayers={4} />
    </>
  )
}

export default App
