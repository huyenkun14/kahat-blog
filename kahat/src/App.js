
import Home from "./pages/home/Home";
import TopBar from "./components/topBar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Setting from "./pages/setting/Setting";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const user = true;
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="write" element={user ? <Write /> : <Register />} />
        <Route path="setting" element={user ? <Setting /> : <Register />} />
        <Route path="post/:postId" element={<Single />} />
      </Routes>
    </Router>
  );
}

export default App;
