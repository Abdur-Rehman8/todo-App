"use client"
import { useState } from "react"

export default function Str() {
  // let val = ""

  const [val, setval] = useState("hello world")

  const [val2, setval2] = useState("hello world")

  const onChangeHandler = (e: any) => {
    console.log("", e.target.value)
    setval(e.target.value)

  }
  const onChangeHandler2 = (e: any) => {
    console.log("", e.target.value)
    setval2(e.target.value)

  }

  return (

    <>
      <input type="text" value={val} onChange={onChangeHandler}/>
      <br/>
      <input type="text" value={val2} onChange={onChangeHandler2} />
      <br/>
      lenght of val1 is {val.length}
      <br/>
      lenght of val2 is {val2.length}
      <br/>

    </>
  )
}
