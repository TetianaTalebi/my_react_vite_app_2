import './App.css'
import ListPicker from './ListPicker'

function App() {
  

  return (
    <>
      <ListPicker values={{a: 21, b: 43, c: 50}} />
      <ListPicker values={{fff: 100, lsls: "someString", ddd: "anotherString"}} />
    </>
  )
}

export default App
