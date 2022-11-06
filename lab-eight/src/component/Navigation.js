import React from "react";
import { Link } from "react-router-dom";


const Navigation = () => {
    return(
        <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/about">About</Link>
            </li>
            <li>
            <Link to="/contact">Contact</Link>
            </li>
            <li>
            <Link to="/student/:studentname">Student:Jim Smith</Link>
            </li>
            <li>
            <Link to="/student/:studentname/:studentno?">Student:Jane Smith, Student No:50001</Link>
            </li>
            <li>
            <li>
            <Link to="/redirect">Redirect</Link>
            </li>
            <Link to="/newroute">New Route</Link>
            </li>
        </ul>
    );
};

export default Navigation;