import logo from './logo.svg';
import './App.css';

var ua = navigator.userAgent || navigator.vendor || window.opera;

function isFacebookApp() {
    return (ua.indexOf("FBAN") > -1) || (ua.indexOf("FBAV") > -1);

}

if (isFacebookApp()) {
  if (!window.location.href.match('redirect_fb')) {
    console.log("true")
    window.location.href = "https://example.com/redirect_fb";
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hi there</h1>
      </header>
    </div>
  );
}

export default App;
