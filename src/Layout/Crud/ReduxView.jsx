import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { DeleteUser } from '../UserSlice';
// import '';

const ReduxView = () => {
  const userList = useSelector((state) => state.userList);
  const dispatch = useDispatch();

  function trash(id) {
    dispatch(DeleteUser(id));
  }

  return (
    <>
      <div className="viewredux">
        
        <div className="container mt-5">
         
          <h2 className="text-center  ">User List</h2>
         <NavLink to='/'> <a className='text-white  text-decoration-none back'><i class="fa-solid fa-left-long"></i></a></NavLink>
          <div className="table-responsive mt-4">
            <table className="table table-hover table-bordered">
              <thead className="bg-dark text-white">
                <tr className='bg-dark'>
                  <td>SNo</td>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Mobile No</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {userList.length > 0 ? (
                  userList.map((user,index) => (
                    <tr key={user.id}>
                      <td>{index+1}</td>
                      <td>{user.username}</td>
                      <td>{user.Email}</td>
                      <td>{user.MobileNo}</td>
                      <td>
                        <button
                          className="btn btn-outline-danger btn-sm"
                          onClick={() => trash(user.id)}
                        >
                          <i className="fa-solid fa-trash"></i>
                        </button>
                        <NavLink
                          className="btn btn-outline-warning btn-sm ms-2"
                          to={`/UpdateRedux/${user.id}`}
                        >
                          <i className="fa-solid fa-pen-to-square"></i>
                        </NavLink>
                        <NavLink
                          className="btn btn-outline-secondary btn-sm ms-2"
                          to={`/SingleUser/${user.id}`}
                        >
                          <i className="fa-regular fa-eye"></i>
                        </NavLink>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="text-center text-muted">
                      No users found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReduxView;
