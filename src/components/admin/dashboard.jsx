import React from "react";
import { Route } from "react-router";
import AdminPosts from "./adminPosts";
import SideBar from "./sidebar";
import Users from "./users";

const Dashboard = ({ match }) => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <SideBar />
      <Route path="/admin/posts" component={AdminPosts}></Route>
      <Route path="/admin/users" component={Users}></Route>
    </div>
  );
};

export default Dashboard;
