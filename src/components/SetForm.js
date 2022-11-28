import {useState, useEffect} from 'react'

const SetForm = () => {

    const [amount, setAmount]  = useState(0)
    const [tip, setTip] = useState(0)
    const [total, setTotal] = useState(0)
    const [tipTotal, setTipTotal] = useState(0)
    const perFunc = (e)=>{
      if (e) {
          e.preventDefault() 
      }
      setTip(e.target.value)
  }

  useEffect(() => {
    setTipTotal(tip*amount)
    setTotal(tipTotal.)
  },[amount,tip])

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
                <button type="button">10%</button>
                <button type="button">15%</button>
                <br></br><button type="button">20%</button>
                <button type="button">25%</button>
                <button type="button">Custom</button>
                onChange = {(e)=>setTip(e.target.value/100)}
              </div>
            </div>
            <div>
              <div>
                Number of People
              </div>
              <div>
              <input type="text" placeholder={'0'}/>
              </div>
            </div>
          </div>

      <div className="right">
        <div>
          <p>Tip Amount</p>
          <p>/ person</p>
        <div className='tip-total' input type="text" placeholder={'0.00'}>${tipTotal}</div>
        </div>
        <div>
          <p>Total</p>
          <p>/ person</p>
          <div className='totals' input type="text" placeholder={'0.00'}/>${setTipTotal}
        </div>
        <div className='button-reset' >
                            <button className='button-reset_fill' onClick={resetFunc} > RESET </button>  
                            </div>
      </div>
    </div>
    </form>
    )
}

export default SetForm