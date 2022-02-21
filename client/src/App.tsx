import React from 'react';
import './App.css';
import Router from './routes';

function App() {
  const [data , setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => setData(data.message))
  }, [])

  while(!data){
       return (
      <div className="App">
        <header className="App-header">
          <p>
            {!data ? "Carregando..." :  data }
          </p>
        </header>
      </div>
    );
  }
  return(<Router/>)
}

export default App;
