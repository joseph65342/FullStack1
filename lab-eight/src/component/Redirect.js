import React from "react";

const handleRedirectClick = (props) => {
    const { history } = props;
    if (history) history.push("/");
    else console.log(`history not found in props`);
};


const Redirect = () => {
    return(
      <div>
        <p>Redirect</p>
      </div>
    );
};

export default Redirect;