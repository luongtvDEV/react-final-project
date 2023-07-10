import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
export default function Home() {

    // const [isLogin] = useState(false);
    const navigate= useNavigate();
    // useEffect(()=>{
    //   if(!isLogin){
    //     navigate("/login");
    //   }
    // }, [])
  return (
    <div>index</div>
  )
}
