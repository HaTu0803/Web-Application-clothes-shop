import React, { useState, useEffect } from 'react';
import BarChart from '../BarChart';
import Sidebar from '../Sidebar';
import '../../css/Dashboard.css';

const Dashboard = () => {
    const [yearlyRevenue, setYearlyRevenue] = useState(0);
    const [revenueDataLast6Months, setRevenueDataLast6Months] = useState([]);
    const [quarterlyIncomeData, setQuarterlyIncomeData] = useState([]);
    const [revenueDataLoaded, setRevenueDataLoaded] = useState(false);
    const [quarterlyIncomeLoaded, setQuarterlyIncomeLoaded] = useState(false);

    useEffect(() => {

      const fetchRevenueCurrenYear = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/total-revenue-current-year');
            const data = await response.json();
            setYearlyRevenue(data[0].TotalRevenue);
        } catch (error) {
            console.error(error);
        }
    };

        const fetchRevenueDataLast6Months = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/total-revenue-last-6-month');
                const data = await response.json();
                setRevenueDataLast6Months(data);
                setRevenueDataLoaded(true);
            } catch (error) {
                console.error(error);
            }
        };

        const fetchQuarterlyIncomeData = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/total-revenue-quarter-in-year');
                const data = await response.json();
                setQuarterlyIncomeData(data);
                setQuarterlyIncomeLoaded(true);
            } catch (error) {
                console.error(error);
            }
        };

        fetchRevenueCurrenYear();
        fetchRevenueDataLast6Months();
        fetchQuarterlyIncomeData();
    }, []);

    return (
      <div>
        <div id="App">
            <Sidebar />
            {revenueDataLoaded && quarterlyIncomeLoaded ? (
                <>
                    <div className="BarChart1">
                        <div className="Chart-title">
                            <p className="Chart-content">Doanh thu 6 tháng gần nhất</p>
                        </div>
                        <BarChart
                            chartData={{
                                labels: revenueDataLast6Months.map(entry => `Tháng ${entry.Month}/${entry.Year}`),
                                datasets: [
                                    {
                                        label: 'VNĐ',
                                        data: revenueDataLast6Months.map(entry => entry.TotalRevenue),
                                        backgroundColor: [
                                            '#778beb',
                                            '#63cdda',
                                            '#cf6a87',
                                            '#e77f67',
                                            '#786fa6',
                                            '#f7d794'
                                        ],
                                        borderColor: [
                                            '#778beb',
                                            '#63cdda',
                                            '#cf6a87',
                                            '#e77f67',
                                            '#786fa6',
                                            '#f7d794'
                                        ],
                                    },
                                ],
                            }}
                        />
                    </div>

                    <div className="BarChart2">
                        <div className="Chart-title">
                            <p className="Chart-content">Doanh thu các quý trong năm 2023</p>
                        </div>
                        <BarChart
                            chartData={{
                                labels: quarterlyIncomeData.map(entry => `Quý ${entry.Quarter}/${entry.Year}`),
                                datasets: [
                                    {
                                        label: 'VNĐ',
                                        data: quarterlyIncomeData.map(entry => entry.QuarterlyIncome),
                                        backgroundColor: ['#e15f41', '#f79f24', '#feca57'],
                                        borderColor: ['#e15f41', '#f79f24', '#feca57'],
                                    },
                                ],
                            }}
                        />
                    </div>

                </>
            ) : (
                <p>Loading...</p>
            )}

        </div>
        <div className="yearly-card">
        <div className="card-header">
          <h2> Thu Nhập Trong Năm 2023</h2>
        </div>
        <div className="card-content">
          <p className="revenue">{yearlyRevenue} VNĐ</p>
        </div>
      </div>
        </div>
        
    );
};

export default Dashboard;
