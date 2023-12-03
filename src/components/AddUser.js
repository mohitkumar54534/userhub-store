//Adduser.js
import {
    Button,
    Checkbox,
    FormControlLabel,
    FormLabel,
    TextField,
   
  } from "@mui/material";
  import { Box } from "@mui/system";
  import axios from "axios";
  import React, { useState } from "react";
  import { useNavigate } from "react-router-dom";
  
  const AddUser = () => {
    const history = useNavigate();
    const [inputs, setInputs] = useState({
        ID:"",
     first_name: "",
     last_name: "",

      email: "",
      gender: "",
      image: "",
  
  
      domain: "",

    });
    const [checked, setChecked] = useState(false);
    const handleChange = (e) => {
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
      // console.log(e.target.name, "Value", e.target.value);
    };
  
    const sendRequest = async () => {
      await axios.post("http://localhost:6002/users", {
            ID:String(inputs.ID),
          first_name: String(inputs.first_name),
          last_name: String(inputs.last_name),
          email: String(inputs.email),
          gender: String(inputs.gender),
          image: String(inputs.image),
          available: Boolean(checked),
          domain:String(inputs.domain)
        })
        .then((res) => res.data);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(inputs, checked);
      sendRequest().then(() => history("/users"));
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
          <FormLabel>AVAILABLE</FormLabel>
          <TextField
            value={inputs.available}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="available"
          />
          <FormControlLabel
            control={
              <Checkbox checked={checked} onChange={() => setChecked(!checked)} />
            }
            label="Available"
          />
  
          <Button variant="contained" type="submit">
            Add User
          </Button>
        </Box>
      </form>
    );
  };
  
  export default AddUser;