import React from 'react'

function Card({ name, role }) {
    return (
        <div className="py-4 px-2 bg-slate-900 rounded-md text-white flex justify-center items-center gap-3">
            <img className="w-2/5 rounded-md" src="https://images.pexels.com/photos/264905/pexels-photo-264905.jpeg" alt="Profile Image" />
            <div className="text">
                <h2 className="text-2xl font-bold">{name}</h2>
                <p className="mt-2 text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, molestias.</p>
                <p className="mt-2 text-slate-400">{role}</p>
            </div>
        </div>
    )
}

export default Card