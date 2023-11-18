import React, { useState } from "react";

const Calculator = () => {

    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [result, setResult] = useState(null);
    const [errorMessage, seterrorMessage] = useState("");
    const [success, setSuccess] = useState(false);

    function handleNum1(event) {
        setNum1(event.target.value);
    }

    function handleNum2(event) {
        setNum2(event.target.value);
    }

    function checkValidation(event) {
        if (!num1 || !num2) {
            setSuccess(false);

            if(!num1 && !num2)
            {
                seterrorMessage("Both Feild Cannot Be Empty");
            }
            else if (!num1) {
                seterrorMessage("Num1 Cannot Be Empty");
            }
            else
            {
                seterrorMessage("Num2 Cannot Be Empty");
            } 
        }
        else {
            if(event.target.id == "add")
            {
                addEvent();
            }
            else if(event.target.id == "sub")
            {
                subEvent();
            }
            else if(event.target.id == "multi")
            {
                multiEvent();
            }
            else
            {
                divEvent();
            }
        }
    }

    function addEvent() {
 
            const evalString = `${num1}+${num2}`;
            const ans = eval(evalString);
            setResult(ans);
            seterrorMessage("");
            setSuccess(true);
    }

    function subEvent() {

            const evalString = `${num1}-${num2}`;
            const ans = eval(evalString);
            setResult(ans);
            seterrorMessage("");
            setSuccess(true);  
    }

    function multiEvent() {

            const evalString = `${num1}*${num2}`;
            const ans = eval(evalString);
            setResult(ans);
            seterrorMessage("");
            setSuccess(true);   
    }

    function divEvent() {

            const evalString = `${num1}/${num2}`;
            const ans = eval(evalString);
            setResult(ans);
            seterrorMessage("");
            setSuccess(true);  
    }

    return (
        <div className="calculator-container">
            <h1 className="heading">React Calculator</h1>

            <div className="inputs">
                <input type="text" placeholder="Num 1" id="num-1" onChange={handleNum1} />
                <input type="text" placeholder="Num 2" id="num-2" onChange={handleNum2} />
            </div>

            <div className="arithmetic-btn">
                <button id="add" onClick={checkValidation}>+</button>
                <button id="sub" onClick={checkValidation}>-</button>
                <button id="multi" onClick={checkValidation}>x</button>
                <button id="divide" onClick={checkValidation}>/</button>
            </div>

            {
                errorMessage && <div className="result">
                    <p className="error">Error!</p>
                    <p>{errorMessage}</p>
                </div>
            }
            {
                success && <div className="result">
                    <p className="success">Success</p>
                    <p>{`Result - ${result}`}</p>
                </div>
            }

        </div>
    )
}

export default Calculator;