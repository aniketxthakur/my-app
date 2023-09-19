"use client"
import { putData } from '@/store/slice/userSlice';
 import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Edit = ({ ids, setEditModal}) => {
  const [updatedData, setupdatedData] = useState<any>(null)
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.app.users);
  useEffect(() => {
    const singleuser = user.find((e: any) => e.id === ids);
    setupdatedData(singleuser)
  }, [ids, user])

  const newData = (e: any) => {
    setupdatedData({ ...updatedData, [e.target.name]: e.target.value })
  }
  const submit = (e: any) => {
    e.preventDefault()
    setEditModal(false)
    dispatch(putData(updatedData))
   }
  return (
    <div
      className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none">
      {updatedData &&
        <div className="relative w-auto my-6 mx-auto max-w-sm  border border-blue-700 hover:border-black shadow-lg">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <form className='w-96 mx-auto' onSubmit={submit} >
                <label className="block mb-2 text-sm font-medium ">Name</label>
                <input onChange={newData} value={updatedData.name} name='name' type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="John" required />
                <label className="block mb-2 text-sm font-medium">Email</label>
                <input onChange={newData} name='email' type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 w-full" placeholder="John" required />
                <label className="block mb-2 text-sm font-medium">Age</label>
                <input onChange={newData} value={updatedData.age} name='age' type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="John" required />
                <label className="block mb-2 text-sm font-medium">About</label>
                <input onChange={newData} value={updatedData.about} name='about' type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="John" required />
                <button className='bg-black h-10 w-20 text-white rounded-lg mt-3' >Submit</button>
                <button className='bg-black ml-44 h-10 w-20 text-white rounded-lg mt-3' onClick={()=>setEditModal(false)} >close</button>
              </form>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default Edit;