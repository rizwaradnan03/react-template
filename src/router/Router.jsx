import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/auth/LoginPage'
import HomePage from '../pages/HomePage'

const Router = () => {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default Router