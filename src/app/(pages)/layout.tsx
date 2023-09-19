"use client"
import React, { useState } from 'react';
import Navbar from './component/navbar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}
const AuthLayout: React.FC<DashboardLayoutProps> = (props) => {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
};

export default AuthLayout;
