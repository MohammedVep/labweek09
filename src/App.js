import logo from './logo.svg';
import './App.css';
import StudentInfo from './StudentInfo'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to Fullstack Development - I</h1>
        <h2>React JS Programming Week09 Lab exercise</h2>
        <StudentInfo id="101345469" name="Mohammed Vepari" college="George Brown College, Toronto"></StudentInfo>
      </header>
    </div>
  );
}

export default App;
