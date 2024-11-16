import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { DeleteUser } from '../UserSlice';
// import './ReduxView.css'; // Make sure to import the CSS file for custom styling

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
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="text-center mb-0">User List</h2>
            <NavLink to="/" className="text-white text-decoration-none back">
              <i className="fa-solid fa-left-long"></i> Back
            </NavLink>
          </div>

          {/* Responsive Table */}
          <div className="table-responsive">
            <table className="table table-hover table-bordered custom-table">
              <thead className="bg-dark text-white">
                <tr>
                  <th scope="col">SNo</th>
                  <th scope="col">Username</th>
                  <th scope="col">Email</th>
                  <th scope="col">Mobile No</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {userList.length > 0 ? (
                  userList.map((user, index) => (
                    <tr key={user.id}>
                      <td data-label="SNo">{index + 1}</td>
                      <td data-label="Username">{user.username}</td>
                      <td data-label="Email">{user.Email}</td>
                      <td data-label="Mobile No">{user.MobileNo}</td>
                      <td data-label="Actions" className="d-flex flex-wrap gap-2">
                        <button
                          className="btn btn-outline-danger btn-sm"
                          onClick={() => trash(user.id)}
                        >
                          <i className="fa-solid fa-trash"></i>
                        </button>
                        <NavLink
                          className="btn btn-outline-warning btn-sm"
                          to={`/UpdateRedux/${user.id}`}
                        >
                          <i className="fa-solid fa-pen-to-square"></i>
                        </NavLink>
                        <NavLink
                          className="btn btn-outline-secondary btn-sm"
                          to={`/SingleUser/${user.id}`}
                        >
                          <i className="fa-regular fa-eye"></i>
                        </NavLink>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center text-muted">
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
