import logo from './logo.svg';
import './App.css';
import useLongPollingHook from './customHook';
import { useEffect } from 'react';

function Admins() {
  const {data , error} = useLongPollingHook('http://localhost:8000/admin')
  
  useEffect(() => {
    console.log(data)
  } , [data])

  return (
    <div>
      {
        data?.map((x) => (
          <p style={{
            width:"200px",
            height:"50px",
            backgroundColor:"red"
          }}>{x.username}</p>
        ))
      }
    </div>
  );
}

export default Admins;
