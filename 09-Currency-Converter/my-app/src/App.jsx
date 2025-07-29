

function App() {

  return (
    <>
      <div className="container w-full h-screen flex justify-center items-center">
        <div className="box bg-blue-900 p-4 rounded-md text-white w-1/2">
          {/* Row 1 */}
          <div className="row flex justify-between items-center my-2">
            <h3>From</h3>
            <h3>Currency</h3>
          </div>
          {/* Row 2 */}
          <div className="row flex justify-between items-center my-2">
            <div className="amountField">
              <label forHTML="fromAmount">Amount:</label>
              <input type="number" id="fromAmount" name="fromAmount" placeholder="0" min="0" className="p-4 mx-2 bg-blue-500 text-white outline-none rounded-md" /></div>
            <select name="from" id="from" className="bg-blue-500 px-4 py-2 outline-none rounded-md">
              <option value="usd" className="text-black">USD</option>
              <option value="eur" className="text-black">EUR</option>
              <option value="jpy" className="text-black">JPY</option>
              <option value="cad" className="text-black">CAD</option>
              <option value="inr" className="text-black">INR</option>
            </select>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
