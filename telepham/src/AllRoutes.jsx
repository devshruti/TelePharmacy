import { Routes, Route } from "react-router-dom";
import SignUp from "./Login-SignUp Page/SignUp";
import Login from "./Login-SignUp Page/Login";
import PageNotFound from "./pages/PageNotFound";
import Homepage from "./pages/Homepage";
import AdminLogin from "./Page/AdminLogin";
// import Admin from "./Page/AdminLogin"
import Main from "./components/Main";

import Consult from "./components/Consult";
import Consult2 from "./components/Consult2";
import Consult3 from "./components/Consult3";
import { Admin } from "./Page/Admin";
import { AdminRoutes } from "./Component/Admin/AdminRoutes";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/medicine" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/consult" element={<Consult />} />
      <Route path="/consult2" element={<Consult2 />} />
      <Route path="/consult3" element={<Consult3 />} />
      <Route path="/adminLogin" element={<AdminLogin />} />
      <Route path="/admin" element={
          <Admin />
 
      }></Route>
      <Route path="*" element={<PageNotFound />} />

    </Routes>
  );
}

export default AllRoutes;
