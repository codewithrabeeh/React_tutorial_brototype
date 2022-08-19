import './App.css'


import {useState} from 'react'
// import Counter from './components/Counter'
import Employee from './components/Employee'

let emp = [{name: 'Rabeeh', age: 23},
{name: 'Steve', age: 32},
{name: 'Elon Musk', age: 44}]

function App() {
  /* const [count, setCount] = useState(0)

  const addCount = () => {
      setCount(count+1)
      console.log(count)
  }

  let obj = {
    title: '1st Counter',
    count,
    place: 'Chaliyam'
  }

  return (
    <div className='App'>
     <button onClick={addCount}>Add</button>
      <Counter {...obj}/>
      <Counter title='2nd Counter' count={count}/>
    </div>
    
  ) */

  return(
    <div className='App'>
      {/* <button onClick={addCount}>Add</button> */}
      {
        emp.map((obj, index) => {
           return (
            // <Employee key={index} name={obj.name} age={obj.age}  />
            <Employee key={index} {...obj} />
           )
        })
      }
    </div>
  )
  
}

export default App;
