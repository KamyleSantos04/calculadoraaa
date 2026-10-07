import { useState } from 'react';
import './App.scss';

  export default function Variaveis(){

    const [num1, setnum1] = useState("")
    const [num2, setnum2] = useState("")
    const [resp, setresp] = useState("")
    const [num3, setnum3] = useState("")
    const [num4, setnum4] = useState("")
    const [resp2, setresp2] = useState("")
    const [num5, setnum5] = useState("")
    const [num6, setnum6] = useState("")
    const [resp3, setresp3] = useState("")
    const [num7, setnum7] = useState("")
    const [num8, setnum8] = useState("")
    const [resp4, setresp4] = useState("")
    const [num9, setnum9] = useState("")
    const [num0, setnum0] = useState("")
    const [resp5, setresp5] = useState("")

    function somar(){
      let soma = Number(num1) + Number(num2)
      setresp(soma)
    }

    function meno(){
    let menu = Number(num3) - Number(num4)
    setresp2(menu)
    }

    function veis(){
    let veix = Number(num5) * Number(num6)
    setresp3(veix)
    }

    function vizao(){
    let izao = Number(num7) / Number(num8)
    setresp4(izao)
    }

    function polen(){
    let potenc = Math.pow(num9,num0)
    setresp4(potenc)
    }

    return(

      <div className='calcu'>
        <h1>Calculadora</h1>
          <div className='somi'>
         <input type="text" value={num1} onChange={(e)=>setnum1(e.target.value)} />
         <input type="text" value={num2} onChange={(e)=>setnum2(e.target.value)} />
         <h1>{resp}</h1>
        <button onClick={somar}>Somar</button>
        </div>

      <div class="menus">         
          <input type="text" value={num3} onChange={(e)=>setnum3(e.target.value)} />
         <input type="text" value={num4} onChange={(e)=>setnum4(e.target.value)} />
         <h1>{resp2}</h1>
        <button onClick={meno}>meno</button>
      </div>

      <div class="vexe">         
        <input type="text" value={num5} onChange={(e)=>setnum5(e.target.value)} />
        <input type="text" value={num6} onChange={(e)=>setnum6(e.target.value)} />
        <h1>{resp3}</h1>
        <button onClick={veis}>vezes</button>
      </div>

        <div class="divz">         
        <input type="text" value={num7} onChange={(e)=>setnum7(e.target.value)} />
        <input type="text" value={num8} onChange={(e)=>setnum8(e.target.value)} />
        <h1>{resp4}</h1>
        <button onClick={vizao}>divizao</button>
      </div>  

        <div class="poten">         
        <input type="text" value={num9} onChange={(e)=>setnum9(e.target.value)} />
        <input type="text" value={num0} onChange={(e)=>setnum0(e.target.value)} />
        <h1>{resp5}</h1>
        <button onClick={polen}>potenciacao</button>
      </div>       

      </div>
    )
  }







