import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { addUser } from '../UserSlice'
import uuid4 from 'uuid4'
import { NavLink, useNavigate } from 'react-router-dom'
import { Bounce, toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const CreateRedux = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const dispatch = useDispatch()
  const redirect = useNavigate()

  // Handle form submission
  function regist(data) {
    dispatch(addUser({ ...data, id: uuid4() }))
    toast.success('😎 User Registered Successfully!', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
      onClose: () => {
        redirect("/ReduxView")
      }
    });
    reset()
  }

  return (
    <>
      <div className="CreateUser">
        <div className="container">
          <div className='d-flex justify-content-between pt-5'>
            <NavLink to="/" className='text-decoration-none back'>
              <i className="fa-solid fa-left-long"></i> Back
            </NavLink>
          </div>
          <div className="row justify-content-center align-items-center">
            <div className="col-md-6">
              <div className="card shadow-lg">
                <div className="card-header bg-dark text-white">
                  <h3 className="text-center">Register User</h3>
                </div>
                <div className="card-body p-4">
                  <form onSubmit={handleSubmit(regist)}>
                    
                    {/* Username Field */}
                    <div className="form-group mb-3">
                      <label htmlFor="username" className="form-label">Username</label>
                      <input
                        type="text"
                        id="username"
                        className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                        placeholder="Enter your name"
                        {...register('username', {
                          required: "Username is required",
                          minLength: { value: 3, message: "Username must be at least 3 characters" }
                        })}
                      />
                      {errors.username && <small className="text-danger">{errors.username.message}</small>}
                    </div>

                    {/* Email Field */}
                    <div className="form-group mb-3">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input
                        type="email"
                        id="email"
                        className={`form-control ${errors.Email ? 'is-invalid' : ''}`}
                        placeholder="Enter your email"
                        {...register('Email', {
                          required: "Email is required",
                          pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                            message: "Invalid email format"
                          }
                        })}
                      />
                      {errors.Email && <small className="text-danger">{errors.Email.message}</small>}
                    </div>

                    {/* Mobile Number Field */}
                    <div className="form-group mb-3">
                      <label htmlFor="mobileNo" className="form-label">Mobile Number</label>
                      <input
                        type="text"
                        id="mobileNo"
                        className={`form-control ${errors.MobileNo ? 'is-invalid' : ''}`}
                        placeholder="Enter your mobile number"
                        {...register('MobileNo', {
                          required: "Mobile number is required",
                          pattern: { value: /^[0-9]{10}$/, message: "Mobile number must be 10 digits" }
                        })}
                      />
                      {errors.MobileNo && <small className="text-danger">{errors.MobileNo.message}</small>}
                    </div>

                    {/* Submit and All Users Button */}
                    <div className="text-center d-flex justify-content-around align-items-center">
                      <button type="submit" className="btn btn-dark px-4">Submit</button>
                      <NavLink to='/ReduxView' className="btn btn-dark">
                        <i className="fa-solid fa-users"></i> View Users
                      </NavLink>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </>
  )
}

export default CreateRedux
