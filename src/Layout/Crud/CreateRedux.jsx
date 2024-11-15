import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { addUser } from '../UserSlice'
import uuid4 from 'uuid4'
import { NavLink, useNavigate } from 'react-router-dom'

const CreateRedux = () => {

    const {register,handleSubmit,formState:{errors},reset}= useForm()
    const dispatch = useDispatch()
    const redirect = useNavigate()
    function regist(data){
        // console.log(data);
        dispatch(addUser({...data,id:uuid4()}))
        redirect("/ReduxView")
    }

  return (
    <>
    <div className="CreateUser">
     <div className="container">
      <div className='d-flex justify-content-between pt-5'>
        <a href=""></a>
      </div>
      <div className="row justify-content-center align-items-center">
        <div className="col-md-5">
          <div className="card shadow-lg">
            <div className="card-header bg-dark text-white">
              <h3 className="text-center">Register User</h3>
            </div>
            <div className="card-body p-4">
              <form onSubmit={handleSubmit(regist)}>
                <div className="form-group mb-3">
                  <label htmlFor="username" className="form-label">Username</label>
                  <input
                    type="text"
                    id="username"
                    className="form-control"
                    placeholder="Enter your name"
                    {...register('username', { required: true })}
                  />
                  {errors.username && <small className="text-danger">Username is required</small>}
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="Enter your email"
                    {...register('Email', { required: true })}
                  />
                  {errors.Email && <small className="text-danger">Email is required</small>}
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="mobileNo" className="form-label">Mobile Number</label>
                  <input
                    type="text"
                    id="mobileNo"
                    className="form-control"
                    placeholder="Enter your mobile number"
                    {...register('MobileNo', { required: true })}
                  />
                  {errors.MobileNo && <small className="text-danger">Mobile number is required</small>}
                </div>

                <div className="text-center d-flex justify-content-around align-items-center">
                  <button type="submit" className="btn btn-dark px-4">Submit</button>
                  <NavLink to='/ReduxView'> <div className="AllUser btn btn-dark"> <a href="#"  className='text-white' > <i class="fa-solid fa-users"></i></a> </div></NavLink>

                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div></div>
    </>
  )
}

export default CreateRedux