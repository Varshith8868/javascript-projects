// import './App.css';
import Navbar from './Navbar';
import Home from './Home';

const myVar = 10;
const myVar2 = "Good Morning";
const myLink = "https://www.google.com";

function App() {
  return (
    <div className="App">
      {/* First container */}
      <Navbar />
      <div className="content">Hello World</div>
      <Home />

        <div className="content">
          Hello Varshith
          <p>{myVar}</p>
          <p>{myVar2}</p>
          
          {/* Links */}
          <h1>
            <a href={myLink}>Google Link</a>
          </h1>
          <a href={myLink}>Google Link</a>
        </div>
      </div>
  );
}

export default App;
