import React, { useState, useReducer, useEffect } from 'react'
import AppBarAdmin from '../../components/AppBar'
import LeftMenu from './../../components/LeftMenu';
// import reducer from '../../store/Reducer';
// import {intitialState} from '../../store/Reducer';
// import { SET_DATA, SET_LIST } from '../../store/actions';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { AppConsumer } from '../../store';


export default function Admin() {
  const [state, dispatch] = AppConsumer();
  const navigator = useNavigate();

  const CheckLogin = () => {
    if (sessionStorage.getItem('data') === null) {
      navigator("/login", { replace: true });
    }
  }
  useEffect(() => {
    CheckLogin()

  }, [state.isLogin]);

  return (
    <>
      <AppBarAdmin />
      <LeftMenu />
      <Outlet></Outlet>
    </>
  )
}
