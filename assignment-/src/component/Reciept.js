import React from "react";


const Reciept = (props) => {
    return(
      <>
        <h1>Reciept</h1>
        <div className="container">
            <p><b>Transaction Hash:</b> {props.transactionHash}</p>
            <p><b>Block Hash:</b> {props.blockHash}</p>
            <p><b>Block Number:</b> {props.blockNumber}</p>
            <p><b>From:</b> {props.stringValue}</p>
            <p><b>To:</b> {props.stringToValue}</p>
            <p><b>Gas Used:</b> {props.gasUsed}</p>
        </div>
      </>
    );
};

export default Reciept;