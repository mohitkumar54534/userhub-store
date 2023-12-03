//UserDetail.js
import {
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    FormLabel,
    TextField,
  } from "@mui/material";
  import axios from "axios";
  import React, { useEffect, useState } from "react";
  import { useNavigate, useParams } from "react-router-dom";
  
  const UserDetail = () => {
    const [inputs, setInputs] = useState({});
    const id = useParams().id;
    const [checked, setChecked] = useState(false);
    const history = useNavigate();
  
    useEffect(() => {
      const fetchHandler = async () => {
        try {
          const response = await axios.get(`http://localhost:6002/users/${id}`);
          setInputs(response.data.user);
        } catch (error) {
          console.error("Error fetching user details:", error);
        }
      };
      fetchHandler();
    }, [id]);
  
    const sendRequest = async () => {
      try {
        await axios.put(`http://localhost:6002/users/${id}`, {
          ID: String(inputs.ID),
          first_name: String(inputs.first_name),
          last_name: String(inputs.last_name),
          email: String(inputs.email),
          gender: String(inputs.gender),
          image: String(inputs.image),
          available: Boolean(checked),
          domain: String(inputs.domain),
        });
      } catch (error) {
        console.error("Error updating user:", error);
      }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      sendRequest().then(() => history("/users"));
    };
  
    const handleChange = (e) => {
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent={"center"}
          maxWidth={700}
          alignContent={"center"}
          alignSelf="center"
          marginLeft={"auto"}
          marginRight="auto"
          marginTop={10}
        >
          <FormLabel>ID</FormLabel>
          <TextField
            value={inputs.ID}
            onChange={handleChange}
            type="number"
            margin="normal"
            fullWidth
            variant="outlined"
            name="ID"
          />
          <FormLabel>FIRST NAME</FormLabel>
          <TextField
            value={inputs.first_name}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="first_name"
          />
          <FormLabel>LAST NAME</FormLabel>
          <TextField
            value={inputs.last_name}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="last_name"
          />
          <FormLabel>EMAIL</FormLabel>
          <TextField
            value={inputs.email}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="email"
          />
          <FormLabel>GENDER</FormLabel>
          <TextField
            value={inputs.gender}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="gender"
          />
          <FormLabel>IMAGE</FormLabel>
          <TextField
            value={inputs.image}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="image"
          />
          <FormLabel>DOMAIN</FormLabel>
          <TextField
            value={inputs.domain}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="domain"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                onChange={() => setChecked(!checked)}
              />
            }
            label="Available"
          />
  
          <Button variant="contained" type="submit">
            Update User
          </Button>
        </Box>
      </form>
    );
  };
  
  export default UserDetail;
  