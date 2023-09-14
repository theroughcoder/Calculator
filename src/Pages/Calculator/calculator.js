import { useState } from "react"
//  imported style module
import style from "./calculator.module.css"
// declare and defind three crucial variable for calculator component 
  
   

 // Calculator component 
export default function Calculator(){
        const [result, setResult] = useState("");
        // This function is handling each click that the user clicks
        function handleCalculation(e){
            var val = e.target.dataset.value;

            // conditions for evaluating result.   
            if(val == 1 ||
                val == 2 ||
                val == 3 ||
                val == 4 ||
                val == 5 ||
                val == 6 ||
                val == 7 ||
                val == 8 ||
                val == 9 ||
                val == 0
                ){
                  
                    setResult((pre) => pre + val)
                    
                }else if (val == "-" || val == "+" || val == "/" || val == "*"){
                    
                
                    setResult((pre) => pre + val)
                    
                }else if (val == "=" ) {
                    if(result != "" ){
                        setResult((pre) =>  eval(pre));  
                    }
                    
                }
                    else if (val == "clear"){
                        
                        setResult("");  
                    }
        }
        // console.log(e.target.dataset.value)
    return (
        <>
             <div id="app"></div>
            <div id={style.header}>Calculator</div>
            <div id={style.display}>{result}</div>
            <div onClick={handleCalculation} id={style.btnCont}>
            <div data-value="clear" className={style.btn}>A/C</div>
            <div className={style.btn}>+/*</div>
            <div className={style.btn}>%</div>
            <div data-value="/" className={style.btn +" "+ style.rightBtn}>/</div>
            <div data-value="1" className={style.btn}>1</div>
            <div data-value="2" className={style.btn}>2</div>
            <div data-value="3" className={style.btn}>3</div>
            <div data-value="*" className={style.btn +" "+ style.rightBtn}>*</div>
            <div data-value="4" className={style.btn}>4</div>
            <div data-value="5" className={style.btn}>5</div>
            <div data-value="6" className={style.btn}>6</div>
            <div data-value="-" className={style.btn +" "+ style.rightBtn}>-</div>
            <div data-value="7" className={style.btn}>7</div>
            <div data-value="8" className={style.btn}>8</div>
            <div data-value="9" className={style.btn}>9</div>
            <div data-value="+" className={style.btn +" "+ style.rightBtn}>+</div>
            <div id={style.zero} data-value="0" className={style.btn}>0</div>
            <div className={style.btn}>.</div>
            <div id={style.equal} data-value="=" className={style.btn +" "+ style.rightBtn}>=</div>
            </div>
        </>
    )
}