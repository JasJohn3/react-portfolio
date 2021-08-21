import logo from './logo.svg';
import './App.css';
import Navigation from '../src/screens/Navigation/Navigation'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <Navigation/>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
