import logo from './logo.svg';
import './App.css';
import useLongPollingHook from './customHook';
import { useEffect } from 'react';
import Admins from './Admins';

function App() {
  const {data , error} = useLongPollingHook('http://localhost:8002/')
  
  useEffect(() => {
    console.log(data)
  } , [data])

  return (
  
    <div className="App">
      <div>

      {
        data?.map((x) => (
          <p style={{
            width:"200px",
            height:"50px",
            backgroundColor:"green"
          }}>{x.title}</p>
        ))
      }
      </div>
<div>
  <Admins></Admins>
</div>
    </div>
  );
}

export default App;
