"use client";

import React, { use } from "react";
import { useState } from "react";

export default function CounterAppAdvc() {
  const [counter, setCounter] = useState(0);

//   const Decrement = (kitna = 1) => {
//     console.log("in decrement");
//     setCounter(counter - kitna);
//     console.log(counter);
//   };

  const Increment = (def = 1) => {
    console.log("in Increment");

    setCounter(counter + def);
    console.log(counter);
  };
  return (
    <>
      <h3>Counter app Advance</h3>

      {counter} <br />

      <button
        onClick={() => {
          Increment(-3);
        }}
      >
        Decrement 3
      </button>
      <button
        onClick={() => {
          Increment(-5);
        }}
      >
        Decrement 5
      </button>
      <button
        onClick={() => {
          Increment(2);
        }}
      >
        Increment 2
      </button>
      <button
        onClick={() => {
          Increment(4);
        }}
      >
        Increment4
      </button>
    </>
  );
}
