"use client"
 import  { useState } from 'react'

import React from 'react'
import { useDispatch } from 'react-redux';

const page = () => {
    const [user, setuser] = useState<any>({})
    const dispatch = useDispatch();

    const change = (e: any) => {
      setuser({ ...user, [e.target.name]: e.target.value })
      console.log(user)
    }
    const submit = (e: any) => {
      e.preventDefault()

    }
  return (
    <div>
    <form className='w-96 mx-auto' onSubmit={submit}>
      <label className="block mb-2 text-sm font-medium ">Name</label>
      <input onChange={change} name='name' type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="John" required />
      <label className="block mb-2 text-sm font-medium">Email</label>
      <input onChange={change} name='email' type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 w-full" placeholder="John" required />
      <label className="block mb-2 text-sm font-medium">Age</label>
      <input onChange={change} name='age' type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="John" required />
      <label className="block mb-2 text-sm font-medium">About</label>
      <input onChange={change} name='about' type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="John" required />

      <button className='bg-black h-10 w-20 text-white rounded-lg mt-3' >Submit</button>
    </form>
  </div>
  )
}

export default page
