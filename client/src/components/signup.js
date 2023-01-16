import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import signupImg from '../images/signup.webp'
// import { makeStyles } from '@mui/material'
import { makeStyles } from '@material-ui/core/styles'

const Register = () => {
  const navigate = useNavigate()

  const [user, setUser] = useState({
    name: '', //
    username: '', // sanjuth
    password: '', // 1234
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value,
    })
  }

  const signup = () => {
    const { name, username, password } = user
    if (name && username && password) {
      axios
        .post('http://localhost:3001/signup', user)
        .then((res) => {
          alert(res.data.message)
          navigate('/login')
        })
        .catch((err) => console.log('req error'))
    } else {
      alert('invlid input')
    }
  }

  return (
    <div style={{ backgroundColor: '00000' }}>
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
      {/* <div className="loginImage">
            <img
              src={loginImg}
              width="300"
              style={{ position: 'relative', padding: '20px' }}
              alt="login"
            /> */}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="right"
        minHeight="100vh"
      >
        <div
          className="signup"
          style={{ display: 'flex-end', alignItems: 'flex-end' }}
        >
          {console.log('User', user)}
          <h1>Sign Up</h1>
          <input
            type="text"
            name="name"
            value={user.name}
            placeholder="Your Name"
            onChange={handleChange}
            style={{ width: '250px', height: '35px', fontSize: '18px' }}
          ></input>{' '}
          <br />
          <br />
          <input
            type="text"
            name="username"
            value={user.username}
            placeholder="Your username"
            onChange={handleChange}
            style={{ width: '250px', height: '35px', fontSize: '18px' }}
          ></input>{' '}
          <br />
          <br />
          <input
            type="password"
            name="password"
            value={user.password}
            placeholder="Your Password"
            onChange={handleChange}
            style={{ width: '250px', height: '35px', fontSize: '18px' }}
          ></input>{' '}
          <br />
          <br />
          <Button variant="contained" color="primary" onClick={signup}>
            Sign Up
          </Button>
          &ensp;
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate('/login')}
          >
            Login
          </Button>
        </div>
      </Box>
    </div>
  )
}

export default Register
