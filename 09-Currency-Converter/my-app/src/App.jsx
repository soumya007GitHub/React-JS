import { useState, useEffect } from "react";

function App() {
  const [fromValue, setFromValue] = useState(0);
  const [toValue, setToValue] = useState(0);
  const [initialOptions, setInitialOptions] = useState({});
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("inr");
  const [data, setData] = useState({});

  // Initial Options
  useEffect(()=>{
    async function fetchInitalOptions(){
        try{
        const response = await fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json');
        const initalOptionsObj = await response.json();
        if(initialOptions){
        setInitialOptions(initalOptionsObj);
      }
        console.log(initialOptions);
        }
        catch(error){
            console.log(error);
        }
    }
    fetchInitalOptions();
  },[]);

  // Fetch based on currency Selected
    useEffect(()=>{
    async function fetchBasedOnCurrencySelected(){
        try{
        const response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency}.json`);
        const newCurrencyObj = await response.json();
        if(newCurrencyObj){
        setData(newCurrencyObj[fromCurrency]);
      }
        console.log(data);
        }
        catch(error){
            console.log(error);
        }
    }
    fetchBasedOnCurrencySelected();
  },[fromCurrency]);

  // Convert Currency Function
  function convertCurrency(){
    console.log(fromValue*data[toCurrency]);
    setToValue(fromValue*data[toCurrency].toFixed(2));
  }

  return (
    <>
      <div className="container w-full h-screen flex justify-center items-center flex-col gap-5 bg-slate-900">
        {/* FROM Section */}
        <div className="box bg-blue-900 p-4 rounded-md text-white w-1/2">
          <div className="row flex justify-between items-center my-2">
            <h3>From</h3>
            <h3>Currency</h3>
          </div>
          <div className="row flex justify-between items-center my-2">
            <div className="amountField">
              <label htmlFor="fromAmount">Amount:</label>
              <input
                type="number"
                id="fromAmount"
                name="fromAmount"
                placeholder="0"
                min="0"
                className="p-4 mx-2 bg-blue-500 text-white outline-none rounded-md"
                value={fromValue}
                onChange={(e)=>setFromValue(e.target.value)}
              />
            </div>
            <select
              name="from"
              id="from"
              className="bg-blue-500 px-4 py-2 outline-none rounded-md"
              value={fromCurrency}
              onChange={(e)=>setFromCurrency(e.target.value)}
             >
             {Object.keys(initialOptions).map((option)=>(
              <option key={option} value={option}>{option.toUpperCase()}</option>
             ))}
            </select>
          </div>
        </div>

        {/* TO Section */}
        <div className="box bg-blue-900 p-4 rounded-md text-white w-1/2">
          <div className="row flex justify-between items-center my-2">
            <h3>To</h3>
            <h3>Currency</h3>
          </div>
          <div className="row flex justify-between items-center my-2">
            <div className="amountField">
              <label htmlFor="toAmount">Converted Amount:</label>
              <input
                type="number"
                id="toAmount"
                name="toAmount"
                placeholder="0"
                min="0"
                className="p-4 mx-2 bg-blue-500 text-white outline-none rounded-md"
                disabled
                value={toValue}
                onChange={(e)=>setToValue(e.target.value)}
              />
            </div>
            <select
              name="to"
              id="to"
              className="bg-blue-500 px-4 py-2 outline-none rounded-md"
              value={toCurrency}
               onChange={(e)=>setToCurrency(e.target.value)}
            >
            {Object.keys(initialOptions).map((option)=>(
              <option key={option} value={option}>{option.toUpperCase()}</option>
            ))}
            </select>
          </div>
        </div>

        {/* Convert Button */}
        <button
          className="w-1/2 bg-blue-800 text-white p-4 rounded-md hover:bg-blue-900 hover:cursor-pointer"
          onClick={convertCurrency}
        >
          Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}
        </button>
      </div>
    </>
  );
}

export default App;
