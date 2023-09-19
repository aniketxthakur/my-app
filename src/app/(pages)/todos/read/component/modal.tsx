"use client"
import { deleteData } from '@/store/slice/userSlice';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface ModalProps {
  ids: any;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const Modal: React.FC<ModalProps> = ({ ids, setShowModal }) => {
  const dispatch = useDispatch();
  const allData = useSelector((state: any) => state.app.users);
  const user = allData.find((e: any) => e.id === ids);
  const deleteUser = () => {
    dispatch(deleteData(ids))
    setShowModal(false)
  }
  return (
       <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-sm  border border-blue-700 hover:border-black shadow-lg">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semibold">
                {user ? user.name : ''}
              </h3>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <p className="my-4 text-blueGray-500 text-lg leading-relaxed"> Email :{user ? user.email : ''}
              </p>
              <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                Age : {user ? user.age : ''}
              </p>
              <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                {user ? user.about : ''}
              </p>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button" onClick={() => setShowModal(false)}
              >
                Close
              </button>
              <button onClick={deleteUser}
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button">
                Delete User No : {ids}
              </button>
            </div>
          </div>
        </div>
      </div>
   );
};

export default Modal;