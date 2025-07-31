import React from 'react'

function Card({userData}) {
  return (
    <div className="card m-4 bg-purple-800 text-white p-4 rounded-md flex flex-col flex-wrap justify-center items-center">
    <p className="text-center">Name: {userData.name}</p>
    <p className="text-center">Email: {userData.email}</p>
    <p className="text-center">Address: {`${userData.address.street}, ${userData.address.suite}, ${userData.address.city}, ${userData.address.zipcode}`}</p>
    <p className="text-center">Phone: {userData.phone}</p>
    <p className="text-center">Website: {userData.website}</p>
    <p className="text-center">Company: {userData.company.name}</p>
    </div>
  )
}

export default Card