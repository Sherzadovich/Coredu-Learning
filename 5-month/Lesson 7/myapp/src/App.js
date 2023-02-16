import Header from "./components/Header/Header"
// import Card from "./components/Cards/Card";
import Footer from "./components/Footer/Footer"
import './App.css';
import UsersList from "./components/UsersList/UsersList";

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
        <UsersList/>
        {/* <Card name="Ibrohim" age="20" description="Bala"/> */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
