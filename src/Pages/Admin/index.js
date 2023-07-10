import React, { useState, useReducer, useEffect } from 'react'
import AppBarAdmin from '../../components/AppBar'
import LeftMenu from './../../components/LeftMenu';
// import reducer from '../../store/Reducer';
// import {intitialState} from '../../store/Reducer';
// import { SET_DATA, SET_LIST } from '../../store/actions';
import { CheckLogin } from '../../util';
import { Outlet } from 'react-router-dom';


export default function Admin() {
  // CheckLogin();

  return (
    <>
      <AppBarAdmin />
      <LeftMenu />
      <Outlet></Outlet>
    </>
  )
}
