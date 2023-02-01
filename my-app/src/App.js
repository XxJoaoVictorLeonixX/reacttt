import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {
  const nome = 'Maria'
  return (
    <div className="App">
      <SayMyName nome='João'/>
      <SayMyName nome = {nome}/>
      <Pessoa 
      nome='João Victor' 
      idade='19' 
      prof='Programador' 
      foto='https://via.placeholder.com/150'
      />
    </div>
  );
}

export default App;
