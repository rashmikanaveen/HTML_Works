import { useState } from 'react'

const App = () => {
  const [value, setValue] = useState(10)

  const hello = () => {
    const handler = () => console.log('hello world')
    return handler
  }


  const handleClick = () => {
    console.log('clicked the button')
    setValue(0)
  }
  return (
    <div>
      {value}
      <br />
      <button onClick={hello()}>button</button>
      <button onClick={() => setValue(value+1)}>plusOne</button>
      <button onClick={() => setValue(value-1)}>minusOne</button>
    </div>
  )
}
export default App
