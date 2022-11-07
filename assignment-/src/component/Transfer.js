import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { useState } from "react";
import Reciept from "./Reciept";

const Transfer = (props) => {
    const {type} = useParams();
    const {stringValue} = useLocation().state;
    const {stringToValue} = useLocation().state;
    const {gasUsed} = useLocation().state;
    const {blockNumber} = useLocation().state;
    const {transactionHash} = useLocation().state;
    const {blockHash} = useLocation().state;



    const [isShown, setIsShown] = useState(false);

    const [amount, setAmount] = useState('');

    const handleChange = event => {
      setAmount(event.target.value);
    };

    const handleClick = event => {
      event.preventDefault();


      if(amount.trim().length !== 0) {
        setIsShown(current => !current);
      } else {
        console.log('input was empty');
      }
    };

    return(
      <>
        <h1>Transfer</h1>
        <div className="container">
          <p><b>From:</b> {stringValue}</p>
          <p><b>To:</b> {stringToValue}</p>
          <p><b>Amount:</b> <input type="text" id="amount" name="amount" onChange={handleChange}></input></p>
          <button onClick={handleClick}>Submit</button>
        </div>
        {isShown && <Reciept stringValue={stringValue} stringToValue={stringToValue} gasUsed={gasUsed} blockNumber={blockNumber} transactionHash={transactionHash} blockHash={blockHash} />}

      </>
    );
};

export default Transfer;