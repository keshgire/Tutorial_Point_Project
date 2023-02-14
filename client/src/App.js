import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import CreatePost from "./components/CreatePost";
import Home from "./components/Home";
import EditPost from "./components/EditPost";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/createPost" element={<CreatePost />} />
          <Route path="/" element={<Home />} />
          <Route path="/editpost/:id" element={<EditPost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
