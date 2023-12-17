import { useState } from 'react'
import './App.css'

function App() {
  const [billAmt, setBillAmt] = useState(0)
  const [tipPercentage, setTipPercentage] = useState(0)
  const [numOfPeople, setNumOfPeople] = useState(1)
  const tipAmt = billAmt * tipPercentage
  const totalAmt = billAmt + tipAmt

  function handleChange(event) {
    const { id, value } = event.target 

    if (id === "bill-amt") {
      setBillAmt(parseFloat(value))
    }
    if (id === "five-percent-tip" || id === "ten-percent-tip" || id === "fifteen-percent-tip" || id === "twenty-five-percent-tip" || id === "fifty-percent-tip") {
      setTipPercentage(parseFloat(value))
    }
    if (id === "custom-tip-percentage") {
      setTipPercentage(parseFloat(value) / 100)
    }
    if (id === "number-of-people") {
      setNumOfPeople(parseFloat(value))
    }
  }

  function handleFocus(event) {
    const { id } = event.target

    if (id != "custom-tip-percentage") {
      document.getElementById('custom-tip-percentage').value = ''
    } else {
      document.getElementById('five-percent-tip').checked = false
      document.getElementById('ten-percent-tip').checked = false
      document.getElementById('fifteen-percent-tip').checked = false
      document.getElementById('twenty-five-percent-tip').checked = false
      document.getElementById('fifty-percent-tip').checked = false
    }
  }

  function handleReset() {
    setBillAmt(0)
    setTipPercentage(0)
    setNumOfPeople(1)
  }

  return (
    <div className="container">
      <div className='title'>Splitter</div>
      <form className="form">
        <label htmlFor="bill-amt">Bill
        </label>
        <div className="bill-amt">
          <img src="src/assets/icon-dollar.svg" alt="dollar sign" />
          <input
              type="text"
              id="bill-amt"
              name="bill-amt"
              onChange={handleChange}
            />
        </div>
        <p>Select Tip %</p>
        <label htmlFor="five-percent-tip">5%
          <input 
            type="radio"
            className="radio-btn"
            name="tip-percentage" 
            id="five-percent-tip"
            value={.05}
            onChange={handleChange}
            onFocus={handleFocus}
          />
        </label>
        <label htmlFor="ten-percent-tip">10%
          <input 
            type="radio"
            className="radio-btn" 
            name="tip-percentage" 
            id="ten-percent-tip"
            value={.10} 
            onChange={handleChange}
            onFocus={handleFocus}
          />
        </label>
        <label htmlFor="fifteen-percent-tip">15%
          <input 
            type="radio"
            className="radio-btn" 
            name="tip-percentage" 
            id="fifteen-percent-tip"
            value={.15}
            onChange={handleChange}
            onFocus={handleFocus} 
          />
        </label>
        <label htmlFor="twenty-five-percent-tip">25%
          <input 
            type="radio"
            className="radio-btn" 
            name="tip-percentage" 
            id="twenty-five-percent-tip"
            value={.25}
            onChange={handleChange}
            onFocus={handleFocus} 
          />
        </label>
        <label htmlFor="fifty-percent-tip">50%
          <input 
            type="radio"
            className="radio-btn" 
            name="tip-percentage" 
            id="fifty-percent-tip"
            value={.5}
            onChange={handleChange} 
            onFocus={handleFocus}
          />
        </label>
        <label htmlFor="custom-tip-percentage">Custom
          <input 
            type="number" 
            name="tip-percentage"
            id="custom-tip-percentage"
            onChange={handleChange} 
            onFocus={handleFocus}
          />
        </label>
        <label htmlFor="number-of-people">Number of People
          <input 
            type="number" 
            name="number-of-peple" 
            id="number-of-people"
            onChange={handleChange} 
          />
        </label>
        
        <div className="results">
          <div className='flex'>
            <div>
              <p className='amount'>Tip Amount</p>
              <p className='denominator'>/ person</p>
            </div>
            <p id="tip-amt">${(tipAmt / numOfPeople).toFixed(2)}</p>
          </div>
          <div className='flex'>
            <div>
              <p className='amount'>Total</p>
              <p className='denominator'>/ person</p>
            </div>
            <p id="total-amt">${(totalAmt / numOfPeople).toFixed(2)}</p>
          </div>
          <input 
            type="reset" 
            value="Reset" 
            className="reset-btn" 
            onClick={handleReset} 
          />
        </div>
      </form>
    </div>
  )
}

export default App
