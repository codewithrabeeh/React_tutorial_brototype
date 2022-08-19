import './App.css'
import ClassHeader from './components/ClassHeader';
import FuncHeader from './components/FuncHeader' 

function App() {
  const data = 'Just a data'
  return (
    <div className='background-color'>
      {/* <FuncHeader data={data} /> */}
      <ClassHeader data={data}/>
      <h3>Hello World</h3>
      <p>This is para para paragraph......</p>
    </div>
    
  )
}

// function Heyy(){
//   return(<h2>This is Hey Component</h2>)
// }

export default App;
/* https://youtu.be/NsJZeJho9Ec?t=1636 */