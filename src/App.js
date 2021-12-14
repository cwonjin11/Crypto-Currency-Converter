
import NewsFeed from "./component/NewsFeed";
import CurrencyConverter from "./component/CurrencyConverter";



 const App = () => {
  return (
    <div className="app">
      <h1>Crypto-Currency Converter</h1>
      <div className="app-wrapper">
      <CurrencyConverter />
        <NewsFeed /> 
      </div>

    </div>
  );
}

export default App;
