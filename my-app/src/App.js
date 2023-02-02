import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';

function App() {
  const nome = 'Maria'
  return (
    <div className="App">
      <h1>Testando CSS</h1>
      <Frase/>
      <Frase/>
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
