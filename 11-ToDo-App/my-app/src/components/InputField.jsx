import React, {useState} from 'react'

function InputField() {
const [value, setValue] = useState('');
  return (
    <input 
    type="text" 
    name="text" 
    id="text" 
    className='w-full p-4 rounded-sm text-white bg-indigo-900 outline-none'
    placeholder="Work on react.js"
    value={value}
    onChange={(e)=>setValue(e.target.value)}
    />
  )
}

export default InputField