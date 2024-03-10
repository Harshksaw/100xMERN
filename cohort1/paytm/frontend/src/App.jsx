import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";

// import { SendMoney } from "./pages/SendMoney";
import Home from "./pages/Home";
import { Dashboard } from "./pages/DashBoard";
import { SendMoney } from "./pages/SendMoney";
import HeaderSection from "./components/Header";
import Navbar_dash from "./components/Navbar";

function App() {
  return (
    <>
       <BrowserRouter>
        <HeaderSection/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/send" element={<SendMoney />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App