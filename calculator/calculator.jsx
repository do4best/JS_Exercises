import React, {useState} from 'react';
import '../../index.css';
function Calculator(props) {
    const [calc,setCalc] = useState("")
    const [result,setResult] = useState("")
    const [number,setNumber] = useState(0)

    const ops=['/','*','+','-']
    const updateCalc=value=>{
        if(ops.includes(value) && calc === '' || ops.includes(value) && ops.includes(calc.slice(-1)
        )
        ){
            return;
        }
        setCalc(calc + value)
        if(!ops.includes(value)){
            setResult(eval(calc+value).toString());
        }
    }
    const createDigits=()=>{
        const digits=[]
        for(let i=1; i<=9; i++){
                    digits.push(<button key={i} onClick={()=>updateCalc(i.toString())}>{i}</button>)
        }
        return digits;
    }
    const calculate=()=>{
        setCalc(eval(calc).toString())
    }
    const deleteLast=()=>{
        setNumber(number)
    }
    return (
        <>
        <div className="App">
            <div className="calculator">
                <div className="display">
                    {result? <span>({result})</span>:''} &nbsp;
                    {calc || "0"}
                </div>
                <div className="operators">
                    <button onClick={()=>updateCalc('/')}>/</button>
                    <button onClick={()=>updateCalc('*')}>*</button>
                    <button onClick={()=>updateCalc('+')}>+</button>
                    <button onClick={()=>updateCalc('-')}>-</button>

                    <button onClick={deleteLast}>Dell</button>
                </div>
                <div className="digits">
                    {createDigits()}
                    <button onClick={()=>updateCalc('0')}>0</button>
                    <button onClick={()=>updateCalc('.')}>.</button>
                    <button onClick={calculate}>=</button>
                </div>
            </div>
        </div>
        </>
    );
}

export default Calculator;