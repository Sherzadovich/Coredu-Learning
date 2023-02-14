import './App.css';

function App() {

  const h1style = {
    color: "red",
    backgroundColor: "black"
  }

  //* class = className
  //* for = htmlFor

  return (
    <div className="App">
      <h1 style={h1style}>Bolla hammaga salom!</h1>
    </div>
  );
}

export default App;
