import './App.css';
import Title from './componentes/Title';
import Cardwrapper from './componentes/Cardwrapper';

function App() {
  const numeros =[45, 76, 23, 670, 3, 78]
  return (
    <div className="App">
      <Title nombre="Paul"/>
      <Cardwrapper />

      {numeros.map(numero => {
        // Procesamos el número antes de mostrar el dato
        const precio = numero * 0.9;
        const id= Math.random();

        return (
          <p key={id}>El precio con 10% off es: {precio}</p>
        )
      })}

        Hola mundo
    </div>
  );
}

export default App;
