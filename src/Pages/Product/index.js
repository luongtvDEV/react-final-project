import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container';
import TableApp from '../../components/Table';
import FormProduct from './component/FormProduct';
// import axios from 'axios';
// import axiosClient from '../../api/axiosClient';
import productApi from '../../api/productApi';
import { AppConsumer } from '../../store';
import { GET_ID_PRODUCT } from './../../store/actions';
import Pagination from '@mui/material/Pagination';
import axiosClient from '../../api/axiosClient';

export default function Product() {
  const [dataProduct, setDataProduct] = useState([]);
  const [column] = useState(['ID', 'Product Name', 'Price', 'Quantity', 'Description ', 'Action']);

  const [state, dispatch] = AppConsumer();

  const [totalPage, setTotalPage] = useState(0);
  useEffect(() => {
    getTotalPage();
    getProduct();

  }, []);

  const getTotalPage = async () => {
    let res = await productApi.getAllProduct();
    const totalPage = Math.ceil(Number(res.data.length) / 5);
    setTotalPage(totalPage);
    console.log(totalPage)

  }

  const getProduct = async () => {
    let res = await productApi.getProductPerPage(1);
    // let data = await res.json();
    setDataProduct(res.data)
  }

  const addProduct = async (data) => {
    let res = await productApi.addNewProduct(data);
    if (res.status === 201) {
      getProduct();
    }
  }
  const updateProduct = async (id, data) => {
    let res = await productApi.updateProduct(id, data);
    getProduct();
    dispatch(GET_ID_PRODUCT(''))

  }
  const deleteProduct = async (id) => {
    let res = await productApi.deleteProducts(id);
    getProduct();
  }
  const handlePaging = async (e, page) => {
    const res = await productApi.getProductPerPage(page);
    setDataProduct(res.data)
  }
  return (
    <div>
      <h1>Product</h1>
      <div>
        <FormProduct addProduct={addProduct} updateProduct={updateProduct} />
      </div>
      <Container maxWidth="lg">
        <TableApp dataProduct={dataProduct} column={column} getProduct={getProduct} deleteProduct={deleteProduct} />
        <Pagination count={totalPage} color="secondary" onChange={(e, page) => handlePaging(e, page)} />

      </Container>
    </div>
  )
}
