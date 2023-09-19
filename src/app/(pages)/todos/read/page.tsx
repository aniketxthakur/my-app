"use client"
import { deleteData, readData } from '@/store/slice/userSlice';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Modal from './component/modal';
import Link from 'next/link';
import Edit from '../edit/page';

const Read = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state: any) => state.app.users)
  const loadingData = useSelector((state: any) => state.app.loading)
  const [ids, setids] = useState<any>();
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setEditModal] = useState<any>(false);
  useEffect(() => {
    dispatch(readData())
  }, [dispatch])

  if (loadingData) {
    return (<p>Loading...</p>)
  }

  return (
    <div className='grid grid-cols-5' >
      {showModal && <Modal ids={ids} showModal={showModal} setShowModal={setShowModal} />}
      {showEditModal && <Edit ids={ids} setEditModal={setEditModal} />}
      {
        userData.map((e: any, id: any) => {
          return (
            <div key={id} className="max-w-sm p-6 bg-gray-50 grid gap-1 m-2 border-2 border-emerald-600  hover:border-black rounded-lg">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-green-700">User ID :{e.id} </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700">Name : {e.name}</p>
              <p className="mb-3 font-normal text-gray-700">Age : {e.age}</p>
              <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center border border-emerald-600 hover:border-black rounded-lg" onClick={() => [setids(e.id), setShowModal(true)]}>
                View more
              </button>
              <button onClick={() => [setids(e.id), setEditModal(true)]} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center border border-emerald-600 hover:border-black rounded-lg">
                Edit
              </button>
              <Link href="/todos/read" onClick={() => dispatch(deleteData(e.id))} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center border border-emerald-600 hover:border-black rounded-lg">
                Delete
              </Link>
            </div>
          )
        })
      }
    </div>
  )
}

export default Read
