import logo from './logo.svg';
import './App.css';
import Example from "./Example";
import Example2 from './Example2';

function App() {
 const abc="lorem hdgvfhvhvfh";
  return (
    <div className="App">
      <h1 style={{backgroundColor:"red"}}> Friends {20+20} </h1>
      <Example fname={abc} age="30"/>
      
      <Example fname="Zarana Urmi Dhara"/>

      <Example2/>
     
    </div>
  );
}

export default App;
