//App.js
import React from "react";

import Header from "./components/Header";

import {Route, Routes } from "react-router-dom";
import AddUser from "./components/AddUser";
import Users from "./components/User/Users";
import UserDetail from "./components/User/UserDetail";
function App() {
  return (
    <React.Fragment>
    <header>
      <Header />
    </header>
    <main>
    <Routes>
        <Route path="/add" element={<AddUser />} exact/>
        <Route path="/users" element={<Users />} exact/>
        <Route path="/users/:id" element={<UserDetail />} exact />

        </Routes>

      
    </main>
  </React.Fragment>
);
}
export default App;
