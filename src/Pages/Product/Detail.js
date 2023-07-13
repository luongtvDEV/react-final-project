import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import productApi from '../../api/productApi';
export default function Detail() {
    const [product, setProduct]= useState({});
    const {id}= useParams();
    useEffect(()=>{
        getDetail();
    },[])
    const getDetail= async()=>{
        let res= await productApi.getProductById(id);
        setProduct(res.data);
    }
    return (
    <div>
        <h1>Detail of product with Id ={id}</h1>
    </div>
  )
}
