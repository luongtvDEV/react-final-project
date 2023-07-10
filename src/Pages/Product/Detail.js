import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import productApi from '../../api/productApi';
export default function Detail() {
    const {id}= useParams();
    useEffect(()=>{
        getDetail();
    },[])
    const getDetail= async()=>{
        let res= await productApi.getProductById(id);
        console.log(res.data)
    }
    return (
    <div>
        <h1>Detail</h1>
    </div>
  )
}
