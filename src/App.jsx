import { Suspense } from "react";
import "./App.css";
import Countries from "./components/countries/countries";

const countriesPromis = fetch(
  "https://own-made-api-connection-of-countries-tsn.onrender.com/countries"
).then((res) => res.json());

function App() {
  return (
    <>
      <Suspense fallback={<h3>Countries are loading...</h3>}>
        <Countries countriesPromis={countriesPromis}></Countries>
      </Suspense>
    </>
  );
}

export default App;
