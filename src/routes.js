/*!

=========================================================
* Argon Dashboard React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "views/Index.js";
import Candidates from "views/candidates/Candidates";
import Register from "views/Register.js";
import Login from "views/Login.js";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-red",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/candidates",
    name: "All Candidates",
    icon: "ni ni-single-02 text-primary",
    component: Candidates,
    layout: "/admin",
  },
  {
    path: "/invited-candidates",
    name: "Invited Candidates",
    icon: "ni ni-single-02 text-yellow",
    component: Candidates,
    layout: "/admin",
  },
  {
    path: "/pending-candidates",
    name: "Pending Candidates",
    icon: "ni ni-single-02 text-green",
    component: Candidates,
    layout: "/admin",
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-key-25 text-info",
    component: Register,
    layout: "/auth",
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-circle-08 text-pink",
    component: Login,
    layout: "/auth",
  },
];
export default routes;
