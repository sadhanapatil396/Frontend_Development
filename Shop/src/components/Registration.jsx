import React from 'react'
const Registration = () => {
  return (
    <div className='Reg-style'>

        <div className='main-style'>

        <h2 className='box-1'>Create your Account in ShopZone</h2>
        <div className='email-style'>
      <label for="emailid">User Name:</label>
      <input type="text" placeholder='Enter your User Name' id='emailid' /><br />

      <label for="passwordId">Password:</label>
    <input type="password" placeholder="Enter password" id="passwordId"></input>
    <div className='reg-2'>

    <button className='login-style'>Login</button>
    <button className='signin-style'>Signin</button>
    </div>

       </div>
       
       </div>

      
    </div>
  )
}

export default Registration