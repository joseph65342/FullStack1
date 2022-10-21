import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Greeter from './Greeter';
import LikeButton from './LikeButton';
import reportWebVitals from './reportWebVitals';

function showButtonMultipleTimes() {
  const rows = [];
  for(let i = 0; i <= 9; i++) {
    rows.push(<LikeButton key={i} />);
  }
  return <p>{rows}</p>;
}

const Display = () => {
  
  return <>
    <Greeter />
    <div>{showButtonMultipleTimes()}</div>
  </>
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Display />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
