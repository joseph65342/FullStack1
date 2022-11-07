import React from "react";


const Transactions = () => {
    return(
      <>
        <h1>Transaction History</h1>
        <div className="container">
            <p><b>Transaction Hash:</b> 0x35bf8370a0h3ejgv84j41g4k9g48532d84590j174m4d892fk39522c68294c3hj</p>
            <p><b>Status:</b> SUCCESS</p>
            <p><b>Timestamp:</b> 2022-11-05T04:05:02.172Z</p>
            <p><b>From:</b> 0xhl4db3952622d473573829n3956a2k2959bk22m1</p>
            <p><b>To:</b> 0xwz2mv9467436k26363683m4925n2c2954xv11z0</p>
            <p><b>Value:</b> 200 ETH</p>
            <p><b>Gas Used:</b> 20000</p>
        </div>

        <div className="container">
            <p><b>Transaction Hash:</b> 0x29mz2900h0h3ejgv84a41g4h8a48532d35190j174m4d892fk39522c68294a6kx</p>
            <p><b>Status:</b> SUCCESS</p>
            <p><b>Timestamp:</b> 2022-11-09T04:07:32.389Z</p>
            <p><b>From:</b> 0xn39fk5296825z24443268a3957k2l2958sr20b5</p>
            <p><b>To:</b> 0xwq1nf4958663l24869421u8386x6m3953nv55e8</p>
            <p><b>Value:</b> 4000 ETH</p>
            <p><b>Gas Used:</b> 22000</p>
        </div>
      </>
    );
};

export default Transactions;