import './App.css';


function Testa() {
  return (
    <div className='center'>
      <h1>30 days of React</h1>
      <h2>Number Generator</h2>
    </div>
  );
}

function ListaNumeri({ numbers }) {
  return (
    <ul className='center'>
      {numbers.map((number) => (
        <Numero key={number} number={number} />
      ))}
    </ul>
  );
}

const numberStyle = {
  backgroundColor: 'white',
  color: 'black',
  padding: '10px',
  margin: '10px',
  border: '1px solid black',
  borderRadius: '5px',
  display: 'inline-block',
};

const pari = {
  backgroundColor: 'green',
  color: 'white',
};

const dispari = {
  backgroundColor: 'red',
  color: 'white',
};


function Numero({ number }) {
  let stileDefinitivo = number % 2 === 0 ? { ...numberStyle, ...pari } : { ...numberStyle, ...dispari };

  if(number%2===0){
    stileDefinitivo = { ...numberStyle, ...pari };
    console.log(stileDefinitivo)
  }else{
    stileDefinitivo = { ...numberStyle, ...dispari };
  }

  return (
    <li style = {stileDefinitivo} >{number}</li>
  );
}


function App() {

  let numbers = Array(30);
  console.log(numbers[33]);
  for (let i = 1; i <= numbers.length; i++) {
    numbers[i-1] = i;
  }

  return (
    <>
      <Testa />
      <ListaNumeri numbers={numbers} />
    </>
  );
}

export default App;
