import { useEffect, useState } from 'react'
import Card from './components/Card';

function App() {
  const [userArray, setUserArray] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => setUserArray(json));
  }, []);
  return (
    <div className="body w-full h-full flex justify-center items-center">
      <div className="container grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {
        userArray.map((user)=> <Card key={user.id} userData={user}/>)
      }
      </div>
    </div>
  )
}

export default App