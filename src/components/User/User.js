import { Button } from "@mui/material";
import React from 'react';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./User.css";
const User = (props) => {
const history = useNavigate();
  const { _id,ID,first_name,last_name,email,gender,image,domain,available} = props.user;
  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:6002/users/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/users"));
  };

  return (
    <div className="card">
       <div>
  <h3>ID: {ID}</h3>
  <img src={image} alt={first_name} />

  {/* Display full name in the same row */}
  <h3>Name: {`${first_name} ${last_name}`}</h3>
  <p>Email: {email}</p>
  <p>Gender: {gender}</p>
  <p>Domain: {domain}</p>
  <p>Available: {available}</p>
</div>


<Button LinkComponent={Link} to={`/users/${_id}`} sx={{ mt: "auto" }}>
        Update
      </Button>
      <Button color="error" onClick={deleteHandler} sx={{ mt: "auto" }}>
        Delete
      </Button>
    </div>
  );

};

export default User;