import {useState} from "react"

const UseState = () =>{
    const [number,updateNumber]=useState(0);
    const [text,updateText] = useState("")
    const subTract =() =>{
        updateNumber(number-1);
    }
    const addTion =() =>{
        updateNumber(number+1);
    }
    const reSet =()=>{
        updateNumber(0);
        updateText("");
    }
    return(
        <div>
            <h2>UseState Hook Example</h2>
            <button onClick={subTract}>-</button>
            <input type="number" value={number}/>
            <button onMouseEnter={addTion}>+</button>
            <button onDoubleClick={reSet}>Reset</button>
            <h2> Text typing</h2>
            <input type="text" value={text} onChange={(event)=>updateText(event.target.value)}></input>
            <button onDoubleClick={reSet}>Resett</button>


        </div>
    );

}
export default UseState;