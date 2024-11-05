"use client";
import HomeCard from "@/components/HomeCard/HomeCard";
import HomeHeatMap, {
  HeatmapValue,
} from "@/components/HomeHeatMap/HomeHeatMap";
import HomeInputCard from "@/components/HomeInputCard/HomeInputCard";
import { useEffect, useState } from "react";
import axiosInstance from "../api/apiInstance";

const HomeContent = () => {
  // -- Mocking Data -----------------------------------------------------------
  const categoryList = [
    { id: 1, name: "FOOD", label: "FOOD" },
    { id: 2, name: "TRAVELS", label: "TRAVELS" },
    { id: 3, name: "ENTERTAINMENTS", label: "ENTERTAINMENTS" },
    { id: 4, name: "SHOPPING", label: "SHOPPING" },
    { id: 5, name: "HEALTH", label: "HEALTH" },
    { id: 6, name: "BILLS", label: "BILLS" },
  ];
  // const chartData = [
  //   { date: "2024-09-02", balance: 1 },
  //   { date: "2024-09-03", balance: 2 },
  //   { date: "2024-09-04", balance: 3 },
  //   { date: "2024-09-05", balance: 4 },
  // ];

  // -- Setting Variables ------------------------------------------------------
  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [outcome, setOutcome] = useState(0);

  const [chartData, setChartData] = useState<HeatmapValue[] | undefined>();

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
    axiosInstance
      .get("api/v1/finance/balance")
      .then((res) => {
        console.log("Success on balance");
        setBalance(res.data.balance);
        setIncome(res.data.totalSalary);
        setOutcome(res.data.totalExepenses);
      })
      .catch((err) => {
        console.error("Error on balance");
        console.error(err);
      });
    axiosInstance
      .get("api/v1/finance/history")
      .then((res) => {
        console.log("Success on history");
        console.log(res);
        setChartData(res.data)
      })
      .catch((err) => {
        console.error("Error on history");
        console.error(err);
      });
  }, []);

  useEffect(() => {
    // Call query to add new input from INCOME
    if (inputIncomeData.value > 0) {
      axiosInstance
        .post("api/v1/salary", {
          value: inputIncomeData.value,
        })
        .then((res) => {
          console.log("enviou os dados - inputIncomeData\n", inputIncomeData);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [inputIncomeData]);

  useEffect(() => {
    // Call query to add new input from OUTCOME
    if (inputOutcomeData.value > 0) {
      axiosInstance
        .post("api/v1/expenses", {
          expenseName: inputOutcomeData.description,
          expenseValue: inputOutcomeData.value,
          categories: inputOutcomeData.category_id,
        })
        .then((res) => {
          console.log("enviou os dados - inputOutcomeData\n", inputOutcomeData);
        })
        .catch((err) => {
          console.log(err);
        });
    }
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
            isIncome={false}
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
