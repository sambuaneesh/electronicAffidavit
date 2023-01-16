import './login.css'
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import loginImg from './login.png'
import AppBar from '@mui/material/AppBar'
import { Grid } from '@mui/material'
import Legend from './legend'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

import { Link } from 'react-router-dom'
import './navbar.css'
import favicon from '../images/download.png'
const Login = ({ setLoginUser }) => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)

  const [user, setUser] = useState({
    username: '',
    password: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value,
    })
  }

  const login = () => {
    axios
      .post('http://localhost:3001/login', user)
      // axios.post("http://43.206.117.90:5000/login", user)
      .then((res) => {
        // alert(res.data.message)
        setLoginUser(res.data.user)
        console.log('send')
        navigate('/')
      })
  }
  const buttonStyles = {
    width: '150px',
    height: '50px',
    // borderRadius: '25px',
    fontSize: '16px',
    backgroundColor: 'white',
    color: 'white',
    textAlign: 'center',
    lineHeight: '50px',
    transition: 'background-color 0.5s ease',
    cursor: 'pointer',
  }

  const handleClick = () => setIsOpen(!isOpen)

  return (
    <>
      <AppBar position="static">
        <Toolbar style={{ backgroundColor: 'black' }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Face Recognition
          </Typography>
        </Toolbar>
      </AppBar>
      <div className="login-form-component-root">
        <div className="form-container">
          {/* <label>Username</label> */}
          <div className="loginImage">
            <img
              src={loginImg}
              width="300"
              style={{ position: 'relative', padding: '20px' }}
              alt="login"
            />
          </div>
          <TextField
            className="username-input"
            variant="outlined"
            color="secondary"
            type="text"
            label="Username"
            name="username"
            value={user.username}
            onChange={handleChange}
            //   fullWidth // this prop can be added to make textfield larger
            inputProps={{
              style: {
                fontSize: '2rem',
                padding: '5px',
                margin: '10px',
              },
            }}
          />
          <br />
          <br />
          {/* <label>Password</label> */}
          <TextField
            className="password-input"
            variant="outlined"
            color="primary"
            type="password"
            label="Password"
            name="password"
            value={user.password}
            onChange={handleChange}
            inputProps={{
              style: {
                fontSize: '2rem',
                padding: '5px',
                margin: '10px',
              },
            }}
          />
          <br />
          <br />
          <Button
            className="login-btn"
            variant="contained"
            color="primary"
            onClick={login}
          >
            Login
          </Button>
          &ensp;
          <p style={{ textAlign: 'right', fontSize: '1rem' }}>
            Don't have an account yet?{' '}
            <a
              href="/signup"
              style={{ color: 'green', textDecoration: 'none' }}
            >
              Create one.
            </a>
          </p>
        </div>
      </div>
    </>
  )
}

export default Login
