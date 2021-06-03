import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {bindActionCreators } from "redux"
import { actionCreators } from './State/index'

const App = () => {

  const account = useSelector((state) => {
    return state.account;
  })

  const dispatch = useDispatch();

const {depositMoney,withdrawMoney } = bindActionCreators(actionCreators, dispatch);

// console.log(depositMoney)

  return (
    <div>
       <h1> {account} </h1>
       <button onClick={() => depositMoney(1000)}>Deposit </button>
       <button onClick={() => withdrawMoney(1000)}>Withdraw </button>
    </div>
  );
};

export default App;