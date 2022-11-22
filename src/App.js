import './App.css';

function App() {
  return (
    <div className="App">
          <div className="left">
            <div>
              <p>Bill</p>
              <input type="text" placeholder={'0.00'}/>
            </div>
            <div>
              <div>Tips %</div>
              <div>
                <button type="button">5%</button>
                <button type="button">10%</button>
                <button type="button">15%</button>
                <br></br><button type="button">20%</button>
                <button type="button">25%</button>
                <button type="button">Custom</button>
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
        <input type="text" placeholder={'0.00'}/>
        </div>
        <div>
          <p>Total</p>
          <p>/ person</p>
          <input type="text" placeholder={'0.00'}/>
        </div>
      </div>
    </div>
  );
}

export default App;
