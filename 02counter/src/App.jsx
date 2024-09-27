import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

let [counter, setCounter] = useState(15) // it is a hook there are multiple hooks it takes any values like true false, integer,string ,object etc
//[counter, setCounter] in this first means counter is values we can takes any name and second setCounter is a method or convention i.e. setCount is a method which is control counter variable and when we update counter all counter update at once and we can pass in useState counter default value as you want
//  let counter = 15

 const addValue = () => {
  // console.log("clicked",counter);
  
  // counter = counter + 1
  if(counter<20)
  setCounter(counter+1)
 }

 const removeValue = () => {
  if(counter>0)
  setCounter(counter-1)
  
 }

  return (
    <>
      <h1>Chai aur code</h1>
      <h2>counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value {counter}</button>
      <br />
      <button
      onClick={removeValue}
      >remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
