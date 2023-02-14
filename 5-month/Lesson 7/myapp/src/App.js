import Header from "./components/Header/Header"
import Card from "./components/Cards/Card";
import Footer from "./components/Footer/Footer"
import './App.css';

function App() {

  const h1style = {
    color: "red",
    backgroundColor: "black"
  }

  //* class = className
  //* for = htmlFor


  //* Interpolation
  // const name = "Ibrohim";
  // const data = 9 > 8 ? "Hello" : "Bye";
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Card />
        <Footer />
      </div>
    </div>
  );
}

export default App;
