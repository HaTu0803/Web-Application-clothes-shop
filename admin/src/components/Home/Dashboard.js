import React, { useState, useEffect } from 'react';
import BarChart from '../BarChart';
import Sidebar from '../Sidebar';
import '../../css/Dashboard.css';

/*const Dashboard = () => {
    const [totalRevenueLastMonth, setTotalRevenueLastMonth] = useState({});
    const [revenueByCategoryLastMonth, setRevenueByCategoryLastMonth] = useState({});

    useEffect(() => {
        const fetchTotalRevenueLastMonth = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/total-revenue-last-month');
                const data = await response.json();
                setTotalRevenueLastMonth({
                    labels: ['Total Revenue Last Month'],
                    datasets: [
                        {
                            label: 'VNĐ',
                            data: [data.totalRevenue || 0],
                            backgroundColor: ['#778beb'],
                            borderColor: ['#778beb'],
                        },
                    ],
                });
            } catch (error) {
                console.error(error);
            }
        };

        const fetchRevenueByCategoryLastMonth = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/revenue-by-category-last-month');
                const data = await response.json();

                const labels = data.map(item => item.CategoryName);
                const dataset = {
                    label: 'Doanh Thu Tháng Trước',
                    data: data.map(item => item.CategoryRevenue),
                    backgroundColor: ['green', 'red'],
                    borderColor: ['green', 'red'],
                };
                setRevenueByCategoryLastMonth({
                    labels: labels,
                    datasets: [dataset],
                });
            } catch (error) {
                console.error(error);
            }
        };

        fetchTotalRevenueLastMonth();
        fetchRevenueByCategoryLastMonth();
    }, []);

    return (
        <div id="App">
            <Sidebar />

            <div className="BarChart1">
                <div className="Chart-title">
                    <p className="Chart-content">Tổng doanh thu tháng trước</p>
                </div>
                <BarChart chartData={totalRevenueLastMonth} />
            </div>

            <div className="BarChart2">
                <div className="Chart-title">
                    <p className="Chart-content">Doanh Thu Theo Từng Loại Mặt Hàng</p>
                </div>
                <BarChart chartData={revenueByCategoryLastMonth} />
            </div>
        </div>
    );
};

export default Dashboard;*/
