"use client";

import { useState } from "react";
import HomeDatePicker from "../HomeDatePicker/HomeDatePicker";

type Props = {
  buttonType: "primary" | "secondary";
  title: string;
  buttonText: string;
  categoryList: any[];
  setData: any;
  isIncome?: boolean;
};

const HomeInputCard = ({
  buttonType,
  title,
  categoryList,
  setData,
  isIncome = true,
}: Props) => {
  const [date, setDate] = useState<Date | null>(null);
  const [value, setValue] = useState(0);
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState("");

  const sendData = () => {
    setData({
      value: value,
      description: description,
      category_id: categoryId,
      date: date,
    });
  };
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategoryId(e.target.value);
  };

  let button_color = "bg-main-5";

  switch (buttonType) {
    case "primary":
      button_color = "bg-main-5";
      break;
    case "secondary":
      button_color = "bg-accent-red";
      break;
    default:
      button_color = "bg-main-5";
  }

  return (
    <div className="flex flex-col bg-white items-center justify-center p-4 rounded-xl gap-3">
      <h1 className="text-xl font-semibold text-main-1">{title}</h1>

      <div className="grid grid-cols-2 gap-2 w-11/12 items-center h-full">
        <div className="flex flex-col items-center gap-1">
          <label
            className="font-semibold p-1 text-center"
            htmlFor="incomeValue"
          >
            Insira o Valor
          </label>
          <input
            className="w-full border rounded-md outline-none p-1"
            type="number"
            id="incomeValue"
            min={0.01}
            onChange={(e) => setValue(Number(e.target.value))}
            value={value}
          />
        </div>

        <div className="flex flex-col items-center gap-1">
          <label
            className="font-semibold p-1 text-center"
            htmlFor="incomeDescription"
          >
            Insira a descrição
          </label>
          <input
            className="w-full border rounded-md outline-none p-1"
            type="text"
            id="incomeDescription"
            min={0.01}
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </div>

        {isIncome ? (
          <></>
        ) : (
          <>
            <div className="flex flex-col items-center gap-1">
              <label
                className="font-semibold p-1 text-center"
                htmlFor="incomeCategory"
              >
                Insira a categoria
              </label>
              <select
                className="w-full p-1 rounded-md outline-none border"
                name="incomeCategory"
                id="incomeCategory"
                value={categoryId}
                onChange={handleChange}
              >
                <option disabled value="">
                  -
                </option>
                {categoryList.map((e) => (
                  <option value={e.id} key={e.id}>
                    {e.label}
                  </option>
                ))}
              </select>
            </div>
          </>
        )}
        {/* <HomeDatePicker date={date} setDate={setDate} /> */}
      </div>
      <button
        className={`${button_color} hover:brightness-95 active:brightness-90 text-white p-2 w-11/12 rounded-xl text-xl font-semibold`}
        onClick={sendData}
      >
        Add
      </button>
    </div>
  );
};

export default HomeInputCard;
