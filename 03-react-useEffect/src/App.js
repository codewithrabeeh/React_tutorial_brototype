import './App.css'
import { useState } from 'react';
import Counter from './components/Counter';


function App() {
  const [state, setState] = useState(false)
  return(
    <div className='App'>
      <h1 onClick={()=>setState(!state)}>Show/Hide</h1>       
      {state ? <Counter /> : null}
    </div>
  )
  
}

export default App;
