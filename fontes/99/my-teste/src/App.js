import React, {useState} from 'react';

function App() {

  const [count, setCount] = useState(50);
  
  function Somar(){
    setCount(count + 1);

    //const [n1, n2, n3] = [10, 50, 60, 80, 110];  
    //const [count, AlterarContador] = [50, funcX];  
    //console.log(n1);
  }

  function Subtrair(){
    setCount(count - 1);
  }

  return <div>
    <h1>{count}</h1>
    <button onClick={Somar}>+1</button>
    <button onClick={Subtrair}>-1</button>
  </div>;
}

export default App;
