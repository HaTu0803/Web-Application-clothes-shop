import React from 'react';
import { useState } from "react";
import BarChart from "../BarChart";
import { UserData } from "../../Data";
import { UserData1 } from "../../Datamonth";
import Sidebar from "./../Sidebar";
import "./../../css/Dashboard.css";

const Dashboard = () => {

          const [userData] = useState(
            {
            labels:  ["01/06", "02/06" , "03/06" , "04/06", "05/06", "06/06","07/06","08/06","09/06","10/06","11/06","12/06","13/06","14/06","15/06"],
            datasets: [
        
              {
                label: "VNĐ",
                data: UserData.map((data) => data.userGain),
                backgroundColor: [
                  "#778beb",
                ],
                borderColor: "#778beb",
                
              },
            ],
          });
        
          const [userData1] = useState(
            {
            labels:  ["01/06", "02/06" , "03/06" , "04/06", "05/06"],
            datasets: [
        
              {
                label: "Jean",
                data: UserData1.map((data) => data.jean),
                backgroundColor: [
                  "rgba(75,192,192,1)",
                ],
                borderColor: "rgba(75,192,192,1)",
                
              },

              {
                label: "Jacket",
                data: UserData1.map((data) => data.userGain),
                backgroundColor: "orange",
                borderColor: "orange",
                
              },

              {
                label: "Short",
                data: UserData1.map((data) => data.short),
                backgroundColor: "#26de81",
                borderColor: "#26de81",
                
              },


            ],
          });
        
            return (
              <div id = "App">
              
            <Sidebar />
            <div className = "BarChart1">
            <div className = "Chart-title"><p className = "Chart-content">Doanh Thu Hôm Qua</p></div>
            <BarChart chartData={userData1} />
            </div>

            <div className = "BarChart2">
            <div className = "Chart-title"><p className = "Chart-content">Doanh Thu Tháng Này</p></div>
            <BarChart chartData={userData1} />
            </div>

            <div className = "BarChart3">
            <div className = "Chart-title"><p className = "Chart-content">Doanh Thu Ngày</p></div>
            <BarChart chartData={userData} />
            </div>
          
        
        </div>
    );
}

export default Dashboard;
