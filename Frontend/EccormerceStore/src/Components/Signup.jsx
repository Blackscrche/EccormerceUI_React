import React from 'react'
import './Signup.css'

function Signup() {
  return (
    <>
    <div class="container mt-5">
        <h3 className='mb-4'>Sign Up 👋</h3>
        <form>
          <div className="input  mb-3">
            <label htmlFor="Username" className="mb-2">Username</label>
            <input type="text" id="Username" className="form-control" />
          </div>

          
          <div className="input  mb-3">
            <label htmlFor="Username" className="mb-2">Email</label>
            <input type="email" id="Username" className="form-control" />
          </div>


          <div className="input  mb-3">
            <label htmlFor="Username" className="mb-2">Name</label>
            <input type="text" id="Username" className="form-control" />
          </div>

          <div className="input mb-3">
            <label htmlFor="Username" className="mb-2">Password</label>
            <input type="password" id="Username" className="form-control" />
          </div>

          <div className="input  mb-3">
            <label htmlFor="Username" className="mb-2">Confirm Password</label>
            <input type="password" id="Username" className="form-control" />
          </div>

          
          <div class="text-center p-3">
                <button type="submit" class="btn btn-success">Sign Up</button>
            </div>
        </form>
      </div>
    </>
  )
}

export default Signup