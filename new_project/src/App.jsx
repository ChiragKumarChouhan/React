import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    if (!currencyInfo[to]) return;
    setConvertedAmount((amount * currencyInfo[to]).toFixed(2));
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/35251423/pexels-photo-35251423.jpeg')",
      }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      <div className="relative w-full max-w-md rounded-3xl bg-white/15 backdrop-blur-xl border border-white/20 shadow-2xl p-6">

        <h1 className="text-4xl font-bold text-white text-center">
          Currency Converter
        </h1>

        <p className="text-center text-gray-200 mt-2 mb-8">
          Live exchange rates in seconds
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <InputBox
            label="From"
            amount={amount}
            currencyOptions={options}
            selectCurrency={from}
            onAmountChange={(amount) => setAmount(amount)}
            onCurrencyChange={(currency) => setFrom(currency)}
          />

          <div className="flex justify-center my-5">
            <button
              type="button"
              onClick={swap}
              className="h-12 w-12 rounded-full bg-blue-600 text-white text-xl hover:bg-blue-700 transition duration-300 shadow-lg hover:rotate-180"
            >
              ⇅
            </button>
          </div>

          <InputBox
            label="To"
            amount={convertedAmount}
            currencyOptions={options}
            selectCurrency={to}
            amountDisable
            onCurrencyChange={(currency) => setTo(currency)}
          />

          <button
            type="submit"
            className="w-full mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition duration-300 text-white font-semibold py-3 rounded-xl shadow-lg"
          >
            Convert {from.toUpperCase()} → {to.toUpperCase()}
          </button>
        </form>

        {convertedAmount !== 0 && (
          <div className="mt-6 text-center">
            <p className="text-gray-200 text-sm">Converted Amount</p>

            <h2 className="text-3xl font-bold text-green-400 mt-2">
              {convertedAmount} {to.toUpperCase()}
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
