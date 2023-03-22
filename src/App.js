import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Home from "./Pages/Home/Home";
import NotFoundPage from './Pages/NotFound/NotFound';
import PostDetails from './Pages/PostDetails/PostDetails';
import Posts from './Pages/Posts/Post';
import UserList from './Pages/Users/UsersList';
import UsersDetails from './Pages/UsersDetails/UsersDetails';
import ProtectedRoutes from "./Services/ProtectedRoutes";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/*" element={<NotFoundPage />} />

          <Route path="/" element={<ProtectedRoutes />}>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/users/:userId" element={<UsersDetails />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/post/:postId" element={<PostDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  );
};

export default App
