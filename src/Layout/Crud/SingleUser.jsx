import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const SingleUser = () => {
  const [user, setUser] = useState(null); // Initialize as null to check if user exists
  const { id } = useParams();
  const userList = useSelector((state) => state.userList);

  useEffect(() => {
    // Find the user with the matching ID
    const singleUser = userList.find((ele) => ele.id === id);
    setUser(singleUser);
  }, [id, userList]);

  return (
    <>
      <div className="container mt-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-6">
            {user ? (
              <div className="card shadow-lg p-3 mb-5 bg-white rounded">
                <div className="card-header bg-primary text-white text-center">
                  <h4>User Details</h4>
                </div>
                <div className="card-body">
                  <p className="mb-2">
                    <strong>Username:</strong> {user.username}
                  </p>
                  <p className="mb-2">
                    <strong>Email:</strong> {user.Email}
                  </p>
                  <p className="mb-2">
                    <strong>Mobile:</strong> {user.MobileNo}
                  </p>
                </div>
                <div className="card-footer text-center">
                    <NavLink to='/ReduxView'>
                  <button className="btn btn-primary">Back to Users</button></NavLink>
                </div>
              </div>
            ) : (
              <div className="alert alert-warning text-center">
                User not found!
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleUser;
