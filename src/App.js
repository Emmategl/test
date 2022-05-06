import logo from './logo.svg';
import './App.css';

var ua = navigator.userAgent || navigator.vendor || window.opera;

if(navigator.userAgent.includes("Instagram")){
  window.location.href = "https://mywebsite.com/DummyBytes";
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hi there!</h1>
      </header>
    </div>
  );
}

export default App;
