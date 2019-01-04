import React from 'react';

const test = () => {
  let length = 0;
  fetch('/api/counters')
    .then(res => res.json())
    .then(data => length = data.length);
  return length
}

const Counter = () => (
  <div>
    Counters {`${test()}`} 
    <div>
      input here
    </div>
  </div>
);

export default Counter;
