import React, { useEffect, useState } from "react";
import axios from "axios";
import User from "./User";
import {
  Container,
  Grid,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography,
} from "@mui/material";

const URL = "http://localhost:6002/users";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const Users = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [filter, setFilter] = useState({
    name: "",
    gender: "",
  });

  useEffect(() => {
    fetchHandler().then((data) => {
      setUsers(data.users);
      setFilteredUsers(data.users);
    });
  }, []);

  const handleSearch = (name) => {
    const filteredData = users.filter(user =>
      user.first_name.toLowerCase().includes(name.toLowerCase()) ||
      user.last_name.toLowerCase().includes(name.toLowerCase())
    );
    setFilteredUsers(filteredData);
    setFilter({ ...filter, name });
  };

  const handleFilterChange = (name, value) => {
    setFilter({ ...filter, [name]: value });

    let filteredData = [...users];

    if (value !== '') {
      filteredData = filteredData.filter(user => user[name] === value);
    }

    setFilteredUsers(filteredData);
  };

  const usersToDisplay = Array.isArray(filteredUsers) ? filteredUsers : [];

  return (
    <Container>
      <TextField
        label="Search by Name"
        variant="outlined"
        onChange={(e) => handleSearch(e.target.value)}
        fullWidth
        margin="normal"
      />

      <Grid container spacing={3} style={{ marginTop: 20 }}>
        <Grid item xs={6} md={3}>
          <FormControl fullWidth>
            <InputLabel>Filter by Gender</InputLabel>
            <Select
              value={filter.gender}
              onChange={(e) => handleFilterChange("gender", e.target.value)}
              label="Filter by Gender"
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      {usersToDisplay.length === 0 ? (
        <Typography variant="body1">No users found.</Typography>
      ) : (
        <Grid container spacing={3}>
          {usersToDisplay.map((user) => (
            <Grid item xs={12} md={4} key={user._id}>
              <User user={user} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Users;
