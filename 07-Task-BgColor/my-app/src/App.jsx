import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('black')

  return (
    <>
      <div className='body w-full h-screen' style={{backgroundColor: color}}>
        <div className="container w-screen h-full flex justify-center items-center">
          <button className="mx-2 bg-green-700 text-white p-4 rounded-md border border-black" onClick={()=>setColor('green')}>Green</button>
          <button className="mx-2 bg-red-600 text-white p-4 rounded-md border border-black" onClick={()=>setColor('red')}>Red</button>
          <button className="mx-2 bg-blue-500 text-white p-4 rounded-md border border-black" onClick={()=>setColor('blue')}>Blue</button>
        </div>
      </div>
    </>
  )
}

export default App
