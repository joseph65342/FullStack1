import React from "react";
import { Link } from "react-router-dom";


const Navigation = () => {
    return(
        <ul>
            <li>
            <Link to="/">Transactions</Link>
            </li>
            <li>
            <Link to="/addresses">Addresses</Link>
            </li>
            <li>
            <Link to="/wallet">Wallet</Link>
            </li>
        </ul>
    );
};

export default Navigation;