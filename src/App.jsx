import './App.css'
import { useState } from 'react';

export default function App() {
  const [val, setVal] = useState("");

  const deleteHandler = () => {
    //convert result to string so that it can slice
    setVal(val !== undefined ? val.toString().slice(0, -1) : '');
  };

  console.log(val)

  const calculateHandler = () => {
    setVal(eval(val));
  };
  const clearAll = () => {
    setVal("");
  };



  return (
    <div className="calc">
      <main className="container">
        <input type="text" className="calc-display" value={val} />
        <section className="buttons-Container">
          <div className="small-Buttons">
            <div className="row 1">
              <button
                className="calc-smallButton"
                value="9"
                onClick={(e) => setVal(val + e.target.value)}
              >
                9
              </button>
              <button
                className="calc-smallButton"
                value="8"
                onClick={(e) => setVal(val + e.target.value)}
              >
                8
              </button>
              <button
                className="calc-smallButton"
                value="7"
                onClick={(e) => setVal(val + e.target.value)}
              >
                7
              </button>
              <button
                className="calc-smallButton "
                value="+"
                onClick={(e) => setVal(val + e.target.value)}
              >
                +
              </button>
            </div>
            <div className="row 2">
              <button
                className="calc-smallButton"
                value="6"
                onClick={(e) => setVal(val + e.target.value)}
              >
                6
              </button>
              <button
                className="calc-smallButton"
                value="5"
                onClick={(e) => setVal(val + e.target.value)}
              >
                5
              </button>
              <button
                className="calc-smallButton"
                value="4"
                onClick={(e) => setVal(val + e.target.value)}
              >
                4
              </button>
              <button
                className="calc-smallButton"
                value="-"
                onClick={(e) => setVal(val + e.target.value)}
              >
                -
              </button>
            </div>
            <div className="row 3">
              <button
                className="calc-smallButton"
                value="3"
                onClick={(e) => setVal(val + e.target.value)}
              >
                3
              </button>
              <button
                className="calc-smallButton"
                value="2"
                onClick={(e) => setVal(val + e.target.value)}
              >
                2
              </button>
              <button
                className="calc-smallButton"
                value="1"
                onClick={(e) => setVal(val + e.target.value)}
              >
                1
              </button>
              <button
                className="calc-smallButton"
                value="*"
                onClick={(e) => setVal(val + e.target.value)}
              >
                x
              </button>
            </div>
            <div className="row 4">
              <button
                className="calc-smallButton"
                value="0"
                onClick={(e) => setVal(val + e.target.value)}
              >
                0
              </button>
              <button
                className="calc-smallButton"
                value="/"
                onClick={(e) => setVal(val + e.target.value)}
              >
                /
              </button>
              <button
                className="calc-smallButton"
                value="%"
                onClick={(e) => setVal(val + e.target.value)}
              >
                %
              </button>
              <button
                className="calc-smallButton del"
                onClick={() => deleteHandler()}
              >
                DEL
              </button>
            </div>
          </div>
          <div className="calc-bigButton">
            <div className="calc-row">
              <button
                className="calc-bigButton first"
                onClick={() => clearAll()}
              >
                AC
              </button>
              <button
                className="calc-bigButton second"
                value="="
                onClick={() => calculateHandler()}
              >
                =
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
