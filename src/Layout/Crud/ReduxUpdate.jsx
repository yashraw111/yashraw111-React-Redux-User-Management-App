import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { UpdateUser } from '../UserSlice'
import { toast, ToastContainer, Bounce } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const ReduxUpdate = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const { id } = useParams()
  const { userList } = useSelector((state) => state)
  const dispatch = useDispatch()
  const redirect = useNavigate()

  useEffect(() => {
    const SingleUser = userList.find((user) => user.id === id)
    if (SingleUser) {
      reset(SingleUser)
    }
  }, [id, reset, userList])

  // Function to handle form submission
  function regist(data) {
    dispatch(UpdateUser(data))
    toast.success('✅ User Updated Successfully!', {
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
  }

  return (
    <>
      <div className="updateRedux">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card shadow-lg">
                <div className="card-header bg-dark text-white">
                  <h3 className="text-center">Update User</h3>
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
                          minLength: {
                            value: 3,
                            message: "Username must be at least 3 characters long"
                          }
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
                          pattern: {
                            value: /^[0-9]{10}$/,
                            message: "Mobile number must be exactly 10 digits"
                          }
                        })}
                      />
                      {errors.MobileNo && <small className="text-danger">{errors.MobileNo.message}</small>}
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                      <button type="submit" className="btn btn-dark px-4">Update</button>
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

export default ReduxUpdate
