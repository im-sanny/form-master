import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import "./Grandpa.css";

export const AssetContext = createContext("ash");
export const MoneyContext = createContext(0);
const Grandpa = () => {
  const asset = "clay ring";
  const [money, setMoney] = useState(0);

  return (
    <div className="grandpa">
      <h2>Grandpa</h2>
      <p>Net money: {money}</p>
      <MoneyContext.Provider value={[money, setMoney]}>
        <AssetContext.Provider value="ash">
          <section className="flex">
            <Father asset={asset}></Father>
            <Uncle asset={asset}></Uncle>
            <Aunty></Aunty>
          </section>
        </AssetContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
};

export default Grandpa;

/**
 * 1. Create a context and export it
 * 2. add provider for the context with a value. value could be anything
 * 3. useContext to access value in the context API
 */
