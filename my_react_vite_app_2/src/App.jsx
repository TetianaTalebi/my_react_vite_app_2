import './App.css'
import ListPicker from './ListPicker'

function App() {
  

  return (
    <>
      <ListPicker values={[1,2,3,4]} />
      <ListPicker values={["a", "b", "c"]} />
    </>
  )
}

export default App
