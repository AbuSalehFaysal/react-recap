import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  // const nayoks = ['Jasim', 'Sakib', 'Bapparaz'];
  // const ages = ['25', '40', ''];
  const [nayoks, setNayoks] = useState([]);
  useEffect( () => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setNayoks(data))
  }, [] )
  return (
    <div className="App">
      <MovieCounter></MovieCounter>
      {/* <Nayok name={nayoks[0]}></Nayok>
      <Nayok name={nayoks[1]}></Nayok>
      <Nayok name={nayoks[2]}></Nayok> */}
      {
        nayoks.map(nk => <Nayok name= {nk.name}></Nayok>)
      }
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

function MovieCounter() {
  let [count, setCount] = useState(5);
  // console.log(count, setCount);
  const handleClick = () => setCount(count + 1);
  // console.log(handleClick);
  return (
    <div>
      <button onClick={handleClick}>Add Movie</button>
      <h5>Number of Movies: {count}</h5>
    </div>
  )
}

function Nayok(props) {
  // console.log(props.name);
  const nayokStyle = {
    border: '2px solid green'
  }
  return (
    <div style={nayokStyle}>
    <h1>{props.name} - {props.ages || 84}</h1>
    </div>
  )
}

export default App;
