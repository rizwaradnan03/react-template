import React, { useEffect, useState } from 'react'
import { Card } from '../../components/Card'
import { SubmitButton } from '../../components/Button'
import { loginUser } from '../../api/AuthApi'
import { Navigate, useNavigate } from 'react-router-dom'
import { Alert } from '../../components/Alert'
import { jwtDecode } from 'jwt-decode'

const LoginPage = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const dataToResponse = {
      username: username,
      password: password
    }

    const response = await loginUser(dataToResponse)
    if (response.status === 201) {
      const token = response.data.token
      const decodedToken = jwtDecode(token)

      localStorage.setItem("AccessToken", token)
      localStorage.setItem("Username", decodedToken.name)
      
        Alert({title:"Berhasil", text:"Berhasil Melakukan Login!", icon:"success", confirmButtonText:"Ok"})
          setTimeout(() => {
            navigate('/home')
          }, 2000)
        
    } else {
      Alert({ title: "Gagal", text: "Gagal Melakukan Login!", icon: "error", confirmButtonText: "Ok" })
    }
  }

  const handleCheckToken = () => {
    const token = localStorage.getItem("AccessToken")

    if (!token) {
      Alert({ title: "Gagal", text: "Anda Tidak Memiliki Sesi!", icon: "error", confirmButtonText: "Ok" })
      navigate('/login')
    } else {
      Alert({ title: "Gagal", text: "Anda Tidak Memiliki Sesi!", icon: "success", confirmButtonText: "Ok" })
      navigate('/home')
    }
  }

  useEffect(() => {
    handleCheckToken()
  }, [])

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <Card class="w-25 shadow p-3 mb-5 bg-white rounded">
          <h1 className='text-center'>Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-2">
              <label>Username</label>
              <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Input Username" required />
            </div>
            <div className="form-group mb-2">
              <label>Password</label>
              <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} placeholder="Input Password" required />
            </div>
            <SubmitButton type="submit" color="primary">Submit</SubmitButton>
          </form>
        </Card>
      </div>
    </>
  )
}

export default LoginPage