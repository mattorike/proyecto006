import Dado from "./Dado";




function App() {
  
  const valor1 = Math.trunc(Math.random()*6)+1
  const valor2 = Math.trunc(Math.random()*6)+1
  const valor3 = Math.trunc(Math.random()*6)+1
  return (
    
    <div>
<center>
      <h1>Numeros al azar</h1>
      <hr></hr>
</center>

     <center>
      <Dado valor={valor1} />
      <Dado valor={valor2} />
      <Dado valor={valor3} /> 
      </center>  
      <hr></hr>             
    </div>      
  );
}

export default App;