import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./assets/Home";
import Contact from "./assets/Contact";
import About from "./assets/About";
import Post from "./pages/Post";
import Posts from "./pages/Posts";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<Post />} />
        <Route path="*" element={<h1>Not Found!</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
