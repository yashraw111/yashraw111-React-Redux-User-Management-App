import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { DeleteUser } from '../UserSlice';

const ReduxView = () => {

    const userList = useSelector((state)=>state.userList)
    console.log("View",userList);

    const dispatch =useDispatch()
    console.log(userList);
    

    function trash(id){
        dispatch(DeleteUser(id))
    }
  return (
    <>
    
<div className="container mt-5">
      <h2 className="text-center mb-4">User List</h2>
      <div className="table-responsive">
        <table className="table table-hover table-bordered">
          <thead className="thead-dark bg-dark text-white">
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Mobile No</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {userList.length > 0 ? (
              userList.map((user) => (
                <tr key={user.id}>
                  <td>{user.username}</td>
                  <td>{user.Email}</td>
                  <td>{user.MobileNo}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={()=>trash(user.id)}

                    >
                      Delete
                    </button>

                   
                <NavLink className="btn btn-warning  btn-sm ms-4" to={`/UpdateRedux/${user.id}`}>Upadate</NavLink>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center">
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
    </>
  )
}

export default ReduxView