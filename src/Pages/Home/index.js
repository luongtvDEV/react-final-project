import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';

export default function Home() {

  // const [isLogin] = useState(false);
  // useEffect(()=>{
  //   if(!isLogin){
  //     navigate("/login");
  //   }
  // }, [])
  const navigate= useNavigate();
  const handleClick=()=>{
          navigate("/login");

  }
  return (
    <div>
      <h1>안녛하세요</h1>
      <Button variant="contained" color="success" onClick={handleClick}>
        Login

      </Button>
    </div>
  )
}
