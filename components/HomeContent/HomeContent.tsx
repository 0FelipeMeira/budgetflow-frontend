"use client";
import React, { useEffect } from "react";
import HomeCard from "@/components/HomeCard/HomeCard";
import HomeHeatMap from "@/components/HomeHeatMap/HomeHeatMap";
import HomeInputCard from "@/components/HomeInputCard/HomeInputCard";
import { useState } from "react";

const HomeContent = () => {
  // -- Mocking Data -----------------------------------------------------------
  const categoryList = [
    { id: 1, name: "category 01", label: "category 01" },
    { id: 2, name: "category 02", label: "category 02" },
    { id: 3, name: "category 03", label: "category 03" },
  ];
  const chartData = [
    { date: "2024-09-02", count: 1 },
    { date: "2024-09-03", count: 2 },
    { date: "2024-09-04", count: 3 },
    { date: "2024-09-05", count: 4 },
  ];

  // -- Setting Variables ------------------------------------------------------
  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [outcome, setOutcome] = useState(0);

  // -- Setting functions default values ---------------------------------------
  const [inputIncomeData, setInputIncomeData] = useState({
    value: 0,
    description: "",
    category_id: 0,
    date: "",
  });
  const [inputOutcomeData, setInputOutcomeData] = useState({
    value: 0,
    description: "",
    category_id: 0,
    date: "",
  });

  // -- Calling Functions ------------------------------------------------------

  useEffect(() => {
    // ...call inital query to set values
    setBalance(1000);
    setIncome(1000);
    setOutcome(1000);
  }, []);

  useEffect(() => {
    // Call query to add new input from INCOME
  }, [inputIncomeData]);

  useEffect(() => {
    // Call query to add new input from OUTCOME
  }, [inputOutcomeData]);

  return (
    <>
      {/* Container to organize content */}
      <div className="flex w-11/12 h-full flex-col justify-center gap-5">
        {/* Container for upper data */}
        <div className="grid grid-cols-2 w-full gap-1">
          <HomeInputCard
            buttonType={"primary"}
            buttonText="Add"
            title="Add Income"
            categoryList={categoryList}
            setData={setInputIncomeData}
          />
          <HomeInputCard
            buttonType={"secondary"}
            buttonText="Add"
            title="Add Outcome"
            categoryList={categoryList}
            setData={setInputOutcomeData}
          />
        </div>

        {/* Container for lower data */}
        <div className="grid grid-cols-3 gap-2">
          {/* Container for lower-left data */}
          <div className="grid grid-rows-3 gap-3">
            <HomeCard title={"Monthly Balance"} value={balance} />
            <HomeCard title={"Incoming on this month"} value={income} />
            <HomeCard title={"Outgoing on this month"} value={outcome} />
          </div>

          {/* Container for HeatMap */}
          <div className="bg-white col-span-2 p-6 rounded-xl flex items-center justify-center">
            <HomeHeatMap
              data={chartData}
              title={"Past Months Incoming Money"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeContent;
