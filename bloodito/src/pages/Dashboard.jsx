import { Skeleton } from "@chakra-ui/react";
import bloodlogo from "./asserts/blood-drop.png";
import blooddonate from "./asserts/blood-donation.png";
import bloodbag from "./asserts/blood-bag.png";
import bloodrequest from "./asserts/blood-request.png";
import {plus} from './asserts/plus.png'
import { FcApproval } from "react-icons/fc";
// import Piechart from "../components/Piechart";
import {
  Chart,
  BarElement,
  LinearScale,
  CategoryScale,
  Legend,
  ArcElement,
} from "chart.js";
import { Bar, Pie } from "react-chartjs-2";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import { Pie } from 'react-chartjs-2';

// import React from "react";
Chart.register(BarElement, LinearScale, CategoryScale, Legend, ArcElement);
const Dashboard = () => {
  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sup",
    "Oct",
    "Nov",
    "Dec",
  ];
  const Options = {
    plugins: {
      legend: {
        position: "top",
      },
    },
  };
  const Option = {
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };
  const data = {
    labels,
    datasets: [
      {
        label: "Donars",
        data: [5, 9, 8, 10, 6, 5, 4, 7, 9, 12, 5, 8, 8],
        backgroundColor: "#85a8ff",
      },
      {
        label: "Requests",
        data: [5, 9, 8, 11, 6, 5, 4, 6, 6, 8, 2, 4],
        backgroundColor: "#ff9494",
      },
    ],
  };
  return (
    <>
      <div className="donars-container-stats">
        <div id="card-1" className="blooddonar-stats">
          <img className="blood-logo" src={blooddonate} alt="" />
          <div>
            <div className="donars-number">27</div>
            <div className="donars-name">Donars</div>
          </div>
        </div>
        <div className="blooddonar-stats">
          <img className="blood-logo" src={bloodrequest} alt="" />
          <div>
            <div className="donars-number">24</div>
            <div className="donars-name">Requests</div>
          </div>
        </div>
        <div id="card-2" className="blooddonar-stats">
          <img className="blood-logo" src={bloodlogo} alt="" />

          <div>
            <div className="donars-number">7</div>
            <div className="donars-name">Approved</div>
          </div>
        </div>

        <div id="card-3" className="blooddonar-stats">
          <img className="blood-logo" src={bloodbag} alt="" />
          <div>
            <div className="donars-number">376ml</div>
            <div className="donars-name">Total Blood</div>
          </div>
        </div>
      </div>
      
        <Bar className="bargraph" height={135} data={data} />
      
      {/* <Pie data={data} width={50}/> */}
      {/* <div style={{ width: '500px', height: '500px',margin:'auto',marginTop:'40px' }}> */}
      <div className="pie-chart">
        <Pie data={data} options={Option} />
      </div>
    </>
  );
};

export default Dashboard;
