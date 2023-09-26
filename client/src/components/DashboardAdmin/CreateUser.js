import React, { useState, useEffect } from "react";
import Wrapper from "../../AdminWrappers/AdminCreateReport";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const CreateUser = (props) => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = () => {
    setLoading(true);

    axios
      .get(`${process.env.REACT_APP_API}/getData`)
      .then((response) => {
        setUserData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error retrieving user data", error);
        setLoading(false);
      });
  };

  const handleCreateUser = () => {
    axios
      .post(`${process.env.REACT_APP_API}/register`)
      .then((response) => {
        console.log("User created successfully");
        fetchUserData(); // fetch updated user data
      })
      .catch((error) => {
        console.log("Error creating user", error);
      });
  };

  const navigate = useNavigate();
  const [isDeleted, setIsDeleted] = useState(false); // add state for deleted status

  // const { id } = props.user;
  const id = useParams().id;

  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5000/api/register/${id}`)
      .then((res) => res.data)
      .then(() => setIsDeleted(true))
      .then(() => navigate("/admin/createUser"));
  };

  if (isDeleted) {
    return null; // if report is deleted, don't render it
  }
  return (
    <Wrapper>
      <h3 style={{ letterSpacing: "0.5rem" }}>Create New User</h3>
      <div className="mt-5">
        <div className="container">
          <div className="add_btn mb-5">
            <NavLink to="/admin/RegisterAdmin">
              <button className="createBtn" onClick={handleCreateUser}>
                <i className="fa-solid fa-plus"></i> Create New User
              </button>
            </NavLink>
          </div>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <table className="table table-bordered mt-3">
              <thead className="table1">
                <tr className="table-light tableHeading">
                  <th scope="col">Id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Address</th>
                  <th scope="col" style={{ textAlign: "center" }}>
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {userData.map((user, index) => (
                  <tr key={user._id}>
                    <th scope="row" className="tablebody">
                      {index + 1}
                    </th>
                    <td className="tablebody">{user.name}</td>
                    <td className="tablebody">{user.email}</td>
                    <td className="tablebody">{user.phone}</td>
                    <td className="tablebody">{user.address}</td>
                    <td className="d-flex justify-content-center">
                      <NavLink to={`/admin/adminUpdate/${user._id}`}>
                        <button className="btnUpdate">
                          <i className="fa-regular fa-pen-to-square"></i>
                        </button>
                      </NavLink>
                      {/* <button className="btnDelete" onClick={deleteHandler}>
                        <i className="fa-solid fa-trash"></i>
                      </button> */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default CreateUser;
