import React from "react";
import { BrowserRouter, Route, Routes, Switch, Link } from "react-router-dom";
import { Component } from 'react';


const Addresses = ({ title }) => {
    return(
      <>
      <div>
        <h1>Blockchain Node Addresses</h1>
        <div className="addressContainer">
          <p><Link className="addressLink" to="/transfer/parameter-data" state={{stringValue: '0xh85Ge3v38deg37C7G5za3kU7729431mggUg84867', stringToValue: '0xw39bo8a97eiz29R5O6pf2tE2227171ezzPl97920', gasUsed: 22000, blockNumber: 8, transactionHash: '0xgjac97j471kl1fur38521kr9485jvm728596382ffj381fc903874l8c8c39jx3', blockHash: '0xyhmv78d890wi3gjr67281xn8907bup634612312ppr490zx672861b9t9t24hf8'}}>0xh85Ge3v38deg37C7G5za3kU7729431mggUg84867</Link></p><br/>
          <p><Link className="addressLink" to="/transfer/parameter-data" state={{stringValue: '0xj41Sw5h12yrw24K8E2a8lX9907823isveKi25961', stringToValue: '0xk17ic4p54nxm12LOA7ix7gK3335356iyyLd48431', gasUsed: 23000, blockNumber: 9, transactionHash: '0xzabk76n504aw3zmt97046ge8709wmz907387680ggi276lv207832b7a6a19op4', blockHash: '0xdgri68a957po4tac82317hg8705mvo756890890xxe836ej736872o8s8s33kt5'}}>0xj41Sw5h12yrw24K8E2a8lX9907823isveKi25961</Link></p><br/>
          <p><Link className="addressLink" to="/transfer/parameter-data" state={{stringValue: '0xn17De6o48qz57K8E2a8lX9907823isveKi25961', stringToValue: '0xv49ut0a61czw27ZMS6lv5bE0007678emmGh57589', gasUsed: 22500, blockNumber: 10, transactionHash: '0xeufh25z831mc7kxy19576wz0826bjl519407859eer105dr427469j2r2r60lf8', blockHash: '0fhxyu59s734as7ziw49068mt3465syc495039382llu387gr783980o6d6d45ij2'}}>0xn17De6o48qz57K8E2a8lX9907823isveKi25961</Link></p><br/>
        </div>
      </div>
      </>
    );
};

export default Addresses;