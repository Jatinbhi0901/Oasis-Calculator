import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { clear } from '@testing-library/user-event/dist/clear';
import { calculateNewValue } from '@testing-library/user-event/dist/utils';

function App() {
  const[result ,setResult]= useState("");

  const handleclick=(e)=>{
    setResult(result.concat(e.target.name));
  }
  const clear=()=>{
    setResult("");
  }

  const backspace=()=>{
    setResult(result.slice(0,-1));
  }

  const calculateNewValue=()=>{
    setResult(eval(result))
  }

  return (
    <section class="navbar">
    <div class="container1">
       <form action="">
           <input type="text" class="text" value={result}/>
       </form>

       <button onClick={clear} class="clear">Clear</button>
       <button onClick={backspace}  class="sign">C</button>
       <button onClick={handleclick} name='/' class="sign">&divide;</button>
       <button onClick={handleclick} name='7' class="number">7</button>
       <button onClick={handleclick} name='8' class="number">8</button>
       <button onClick={handleclick} name='9' class="number">9</button>
       <button onClick={handleclick} name='*' class="sign">&times;</button>
       <button onClick={handleclick} name='4' class="number">4</button>
       <button onClick={handleclick} name='5' class="number"> 5</button>
       <button onClick={handleclick} name='6' class="number">6</button>
       <button onClick={handleclick} name='-'class="sign">&ndash;</button>
       <button onClick={handleclick} name='1' class="number">1</button>
       <button onClick={handleclick} name='2' class="number">2</button>
       <button onClick={handleclick} name='3' class="number">3</button>
       <button onClick={handleclick} name='+' class="sign" >+</button>
       <button onClick={handleclick} name='0' class="number">0</button>
       <button onClick={handleclick} name='.' class="sign">.</button>
       <button onClick={calculateNewValue}  class="equals">=</button>


    </div>
</section>
  );
}

export default App;
