



import "./App.scss"
import Main from "./components/Main"

import AllRoutes from './AllRoutes';
import SignUp from './Login-SignUp Page/SignUp';
import Login from './Login-SignUp Page/Login';
function App() {
  return (
    <div className="App">
      <SignUp />
      <Login />
      {/* <Navbar/>
     <Main/> */}
      {/* <Homepage/> */}
      {/* <ProductList/> */}
    </div>
  );
}

export default App;
