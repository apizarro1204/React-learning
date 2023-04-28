import { useEffect, useState } from "react";

export default function Welcome(props) {
  const [counter, setCounter] = useState(0);
  const [semaforo, setSemaforo] = useState(false);

  useEffect(() =>{
    console.log(semaforo)
  }, [semaforo])

  const { message, name } = props;
  const contar = () => {
    setCounter(counter + 1);
    setSemaforo(!semaforo)
  }

  return (
    <div>
      <h1>Hola, {name}</h1>
      <p>{message}</p>
      <h2>Contador de React con Hooks</h2>
      <h4>El número del contador es {counter}</h4>
      <p>El semáforo está en color {semaforo ? 'red' : 'green'}</p>
      <button type="submit" onClick={contar}>
        Sumar contador
      </button>
    </div>
  );
}
