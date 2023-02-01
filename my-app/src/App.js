import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {
  const Name = 'joão'
  const NewName = Name.toUpperCase()

  function sum(a,b){
    return a + b
  }

  const url = "https://via.placeholder.com/150"
  return (
    <div className="App">
      <h2>Alterando o JSX</h2>
      <p>Ola, {NewName}</p>
      <p>soma: {sum(5,5)}</p>
      <img src= {url} alt='Minha imagem '></img>
      <HelloWorld/>
    </div>
  );
}

export default App;
