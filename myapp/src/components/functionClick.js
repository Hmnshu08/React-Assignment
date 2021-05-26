import React from 'react'
//function 
function FunctionClick() {
    function clickHandler(){
        console.log('button Clicked!');
    }
    return (
        <div>
            <br></br>
            <button onClick={clickHandler} className="btn btn-primary">Click</button>
        </div>
    )
}
export default FunctionClick;
