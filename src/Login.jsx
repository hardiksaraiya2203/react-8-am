import React, { useState } from 'react'

const Login = () => {

    const [data,setData] = useState({
        firstName : "",
        lastName : "",
        email : "",
        password : "",
        confirmPassword : ""
    })
    const handleSubmit = (e) =>{

        e.preventDefault();
        console.log(data)
    }
    // const handleFirstName = (e) =>{
    //     setData({...data,"firstName":e.target.value})
    // }
    // const handleLastName = (e) =>{
        
    //     setData({...data,"lastName":e.target.value})
    // }
    // const handleEmail = (e) =>{
        
    //     setData({...data,"email":e.target.value})
    // }
    // const handlePassword = (e) =>{
        
    //     setData({...data,"password":e.target.value})
    // }
    // const handleConfirmPassword = (e) =>{
        
    //     setData({...data,"confirmPassword":e.target.value})
    // }
    const handleInput = (e) =>{
        
        setData({...data,[e.target.name]:e.target.value})
    }
  return (
    <div>

        <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">firstName</label>
            <input type="text" name='firstName' id='firstName'onChange={handleInput}/>

            <label htmlFor="lastName">lastName</label>
            <input type="text" name='lastName' id='lastName'onChange={handleInput}/>

            <label htmlFor="email">email</label>
            <input type="email" name='email' id='email'onChange={handleInput}/>

            <label htmlFor="password">password</label>
            <input type="password" name='password' id='password'onChange={handleInput}/>

            <label htmlFor="confirmPassword">confirmPassword</label>
            <input type="password" name='confirmPassword' id='confirmPassword'onChange={handleInput}/>

            <input type="submit" value="Login"/>
        </form>
      
    </div>
  )
}

export default Login
