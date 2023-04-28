"use client"

import React, { use } from 'react'
import { useState } from 'react'

export default function CounterApp() {
  const [counter, setCounter] = useState(0)

  const Decrement = () => {
    console.log("in decrement")
    setCounter(counter-1)
    console.log(counter)
    

  }
  const Increment = () => {
    console.log("in Increment")

    setCounter(counter + 1)
    console.log(counter)

  }
  return (
    <>
      <h3>Counter app</h3>
      <button onClick={Decrement}>Decrement</button>
      {counter}
      <button onClick={Increment}>Increment</button>
    </>

  )
}
