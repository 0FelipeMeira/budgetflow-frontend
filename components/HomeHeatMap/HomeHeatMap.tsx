import React from "react";
import ReactCalendarHeatmap, {
  ReactCalendarHeatmapValue,
} from "react-calendar-heatmap";
import * as d3 from "d3-scale";

interface HeatmapValue {
  date: string;
  count: number;
}

interface Props {
  data: HeatmapValue[];
  title: string;
}

const getColorClass = (value: any, maxValue: number): string => {
  if (!value || !(value as HeatmapValue).count) {
    return "color-empty"; // Classe para dias sem valor
  }
  const count = (value as HeatmapValue).count;
  const colorScale = d3.scaleLinear().domain([0, maxValue]).range([0, 1]);
  const scaleValue = colorScale(count);

  if (scaleValue < 0.33) return "color-scale-1";
  if (scaleValue < 0.66) return "color-scale-2";
  return "color-scale-3";
};

const HomeHeatMap = ({ data, title }: Props) => {
  const today = new Date();

  // Calcula o valor máximo da escala
  const maxValue = Math.max(...data.map((item) => item.count));

  return (
    <div className="flex flex-col h-full w-full justify-center items-center gap-5">
      <h1 className="text-center text-3xl">{title}</h1>
      <ReactCalendarHeatmap
        startDate={new Date(today.getFullYear(), today.getMonth() - 3, 1)}
        endDate={today}
        values={data}
        classForValue={(value) => `${getColorClass(value, maxValue)} mypointer`}
        gutterSize={2}
        titleForValue={(value) => {
          if (!value) return "";
          return `${value.date}: ${value.count}`;
        }}
      />
    </div>
  );
};

export default HomeHeatMap;
