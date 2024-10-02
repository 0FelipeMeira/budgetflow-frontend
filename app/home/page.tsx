"use client";

import HomeCard from "@/components/HomeCard/HomeCard";
import { useState } from "react";

const HomePage = () => {
  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [outcome, setOutcome] = useState(0);

  return (
    <div className="w-screen h-screen flex">
      <aside className="w-1/5 bg-white h-screen flex flex-col justify-center items-center">
        <div className="bg-main-5 rounded-full w-4/5 flex items-center p-2 gap-3 pl-10 cursor-pointer">
          <img src="./home.svg" alt="Dashboard Icon" />
          <h1 className="w-2/5 text-2xl text-black text-center">Home</h1>
        </div>
      </aside>

      <main className="flex flex-1 flex-col bg-main-0 items-center justify-center gap-10">
        <div className="flex flex-col gap-3">
          <HomeCard title={"Monthly Balance"} value={balance} />
          <HomeCard title={"Incoming on this month"} value={income} />
          <HomeCard title={"Outgoing on this month"} value={outcome} />
        </div>

        <div className="flex flex-col bg-white items-center justify-center p-4 rounded-xl gap-3">
          <h1 className="text-xl font-semibold text-main-1">Add income</h1>

          <div className="grid grid-cols-4 gap-1">
            <div className="flex flex-col items-center">
              <label className="font-semibold" htmlFor="incomeValue">
                Insira o Valor
              </label>
              <input type="number" id="incomeValue" min={0.01} />
            </div>

            <div className="flex flex-col items-center">
              <label className="font-semibold" htmlFor="incomeDescription">
                Insira a descrição
              </label>
              <input type="number" id="incomeDescription" min={0.01} />
            </div>

            <div className="flex flex-col items-center">
              <label className="font-semibold" htmlFor="incomeCategory">
                Insira a categoria
              </label>
              <select name="incomeCategory" id="incomeCategory">
                <option value="cat1">categoria 1</option>
                <option value="cat2">categoria 2</option>
              </select>
            </div>

            <button className="bg-main-5 hover:brightness-95 active:brightness-90 text-white h-full rounded-xl text-xl font-semibold">
              Add
            </button>
          </div>
        </div>

        <div className="flex flex-col bg-white items-center justify-center p-4 rounded-xl gap-3">
          <h1 className="text-xl font-semibold text-main-1">Add Outcome</h1>

          <div className="grid grid-cols-4 gap-1">
            <div className="flex flex-col items-center">
              <label className="font-semibold" htmlFor="outcomeValue">
                Insira o Valor
              </label>
              <input type="number" id="outcomeValue" min={0.01} />
            </div>

            <div className="flex flex-col items-center">
              <label className="font-semibold" htmlFor="outcomeDescription">
                Insira a descrição
              </label>
              <input type="number" id="outcomeDescription" min={0.01} />
            </div>

            <div className="flex flex-col items-center">
              <label className="font-semibold" htmlFor="outcomeCategory">
                Insira a categoria
              </label>
              <select name="outcomeCategory" id="outcomeCategory">
                <option value="cat1">categoria 1</option>
                <option value="cat2">categoria 2</option>
              </select>
            </div>

            <button className="bg-accent-red hover:brightness-95 active:brightness-90 text-white h-full rounded-xl text-xl font-semibold">
              Add
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
