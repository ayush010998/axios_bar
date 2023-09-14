import {useState,useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [data,setData]=useState([])
  const [filtered,setFiltered]=useState([])

  useEffect(()=>{

    axios('https://jsonplaceholder.typicode.com/users')
    .then((res)=>setData(res.data))
    .catch((error)=>console.log(error))

  },[])

  const handleData=(e)=>{
    setFiltered(data.filter(f=>f.name.toLowerCase().includes(e.target.value)))
  }

  return (
    <div className="App">
      <label>Search</label>
      <input type='text' onChange={handleData}/>
        {
          filtered.map((item)=>(
            <h2 key={item.id}>{item.name}</h2>)
          )
        }
    
      
    </div>
  );
}

export default App;
