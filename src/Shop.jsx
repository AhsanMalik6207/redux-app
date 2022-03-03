import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/Index';
import { useSelector } from 'react-redux';
const Shop = () => {
    const dispatch= useDispatch();
    const actions = bindActionCreators(actionCreators,dispatch);
    const balance= useSelector(state=>state.amount)
  return (
    <div>
        <h1> Deposit/Withdraw Money</h1>
        {/* <button className="btn btn-primary mx-2" onClick={()=>dispatch(actionCreators.withdrawMoney(100))} >-</button>
        Update Balace
        <button className="btn btn-primary mx-2" onClick={()=>dispatch(actionCreators.depositMoney(100))}>+</button> */}
        <button className="btn btn-primary mx-2" onClick={()=>{actions.withdrawMoney(100)}} >-</button>
        Update Balace ({balance})
        <button className="btn btn-primary mx-2" onClick={()=>{actions.depositMoney(100)}}>+</button>
    </div>
  )
}

export default Shop