import logo from './logo.svg';
import './App.css';
import Demo1 from './component/classcomp';
import Demo from './component/Funcomp';
import Father from './component/parent';
import Statedemo from './component/MyStates';

function App() {
  return (
    <div className="App">
      <h2>Hii...This is my application</h2>
      <Demo1></Demo1>
      <Demo></Demo>
      <Father></Father>
      <Statedemo></Statedemo>
    </div>
  );
}

export default App;
