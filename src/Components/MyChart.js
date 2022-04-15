import React, { useEffect, useState } from 'react'
import { Chart } from "react-chartjs-2";
import * as Zoom from "chartjs-plugin-zoom";
import BarCharts from './BarCharts';


const MyChart = () => {


const initialOptions = {
  responsive: true,
  maintainAspectRatio: false,
  pan: {
    enabled: true,
    mode: "xy"
  },
  zoom: {
    enabled: true,
    mode: "xy"
  },
  skipNull: true
};

const sampleData = {
  labels: [1, 2, 3, 4],
  datasets: [
    {
      label: "dataset1",
      data: [1, 2, 3, 4],
      backgroundColor: "green"
    },
    {
      label: "dataset2",
      data: [1, 2, null, 4],
      backgroundColor: "red"
    }
  ]
};


  const [value, setValue] = useState(0);
  const [data, setData] = useState({});
  useEffect(() => {
    Chart.register(Zoom);
  }, []);
 

  return (
    <div>Chart section
      <BarCharts data={data} options={initialOptions}/>
      <button
        onClick={() => {
          setData(sampleData);
          setValue(value + 1);
        }}>
        add data
      </button>
    </div>
  )
}

export default MyChart