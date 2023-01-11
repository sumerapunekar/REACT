import './App.css';
import {useEffect, useState} from "react"
function App() {

  const [joke,setJoke] = useState('Wait for your joke')

  useEffect(()=>{
  const result = async ()=>{
    await fetch(" https://api.chucknorris.io/jokes/random?chuck -cat").then( res => res.json()).then(data => setJoke(data.value))
  }

  result();
  },[])
  return (
    <div >
      <h1>{joke}</h1>
    </div>
  );
}
// https://api.chucknorris.io/jokes/random?category={category}
// https://api.chucknorris.io/jokes/categories
export default App;