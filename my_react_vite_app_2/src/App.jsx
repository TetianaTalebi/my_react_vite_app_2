import './App.css'
import ListPicker from './ListPicker';

function App() {
  // Dynamic styles
    const styles = {color: "magenta", fontSize: "40px"};

  return (
    <>
      <ListPicker style={styles} values={{a: "Hello", b: "Bye", c: "Lol"}} />
      <ListPicker style={{color: "salmon", fontSize: "80px"}} values={{fff: 123, eee: 456, jjj: 999}} />
      <ListPicker values={{e: 111, m: 222, n: 333}} />
    </>
  )
}

export default App
