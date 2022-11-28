import {useState, useEffect} from 'react'

const SetForm = () => {

    const [amount, setAmount]  = useState(0)
    const [tip, setTip] = useState(0)
    const [total, setTotal] = useState(0)
    const [tipTotal, setTipTotal] = useState(0)
    const [person, setPeople] = useState(0)
    const [per, setPer] = useState(0)
    const [divide, setTotalDivide] = useState(0)

    const perFunc = (e)=>{
      if (e) {
          e.preventDefault() 
      }
      setTip(e.target.value)
  }

  useEffect(() => {
    setTipTotal(tip*amount)
    setPer(tipTotal/person)
    setTotal(((tip*100) - (0 - amount)))
    setTotalDivide(total/person)

  },[amount,tip, person, tipTotal])

  const resetFunc = ()=>setAmount(0)

    return (
      <form>
      <div className="App">
          <div className="left">
            <div>
              <p>Bill</p>
              <input className="input" placeholder='0.00' onChange = {(e)=> setAmount(e.target.value)}/>
            </div>
            <div>
              <div>Tips %</div>
              <div>
                <button type="button" value={0.05} onClick={perFunc}>5%</button>
                <button type="button" value={0.10} onClick={perFunc}>10%</button>
                <button type="button" value={0.15} onClick={perFunc}>15%</button>
                <br></br>
                <button type="button" value={0.20} onClick={perFunc}>20%</button>
                <button type="button" value={0.25} onClick={perFunc}>25%</button>
                <button type="button">Custom</button>
                onChange = {(e)=>setTip(e.target.value/100)}
              </div>
            </div>
            <div>
              <div>
                Number of People
              </div>
              <div>
              <input className="input" placeholder='0' onChange = {(e)=> setPeople(e.target.value)}/>
              </div>
            </div>
          </div>

      <div className="right">

        <div>
          <p>Tip Amount </p>
          <div className='tip-total' input type="text" placeholder={'0.00'}>${((Math.round(tipTotal * 100)) / 100).toFixed(2)}</div>
          <p>/ person</p>
          <div className='tip-total' input type="text" placeholder={'0.00'}>${((Math.round(per * 100)) / 100).toFixed(2)}</div>
        </div>

        <div>
          <p>Total</p> <div className='totals' input type="number" placeholder={'0'}/>${(total)}
        </div>
          <p>/ person</p> <div className='totals' input type="number" placeholder={'0'}/>${divide.toFixed(2)}
        
          
        <div className='button-reset' >
                            <button className='button-reset_fill' onClick={resetFunc} > RESET </button>  
                            </div>
      </div>
    </div>
    </form>
    )
}

export default SetForm