import { Route, Routes } from "react-router-dom";
import Footer from "./component/Footer/Footer";
import Login from "./component/Login/Login";
import Navbar from "./component/Navbar/Navbar";
import SignUp from "./component/SignUp/SignUp";

function App() {
  return (
   
      <div className="max-w-screen-xl mx-auto">
        <Navbar />
        <Routes>
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </div>
    
  );
}

export default App;
