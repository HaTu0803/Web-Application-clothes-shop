import React, { useMemo, useState, useEffect } from 'react';
import '../../css/Orders.css';
import { MaterialReactTable } from 'material-react-table';
import { Link } from 'react-router-dom';
import picture from '../../Images/eye.svg';
import axios from 'axios';
import { BrowserRouter as Router,Routes, Route, NavLink } from 'react-router-dom';



  
  export default function Orders() {

   
    const columns = useMemo(
      () => [

        {
          accessorKey: "ID", 
          header: "ID",
          Cell: ({ renderedCellValue }) => <span>{renderedCellValue}</span> 
        },

        {
            accessorKey: "Người Mua", 
            header: "Người Mua",
            Cell: ({ renderedCellValue }) => <span>{renderedCellValue}</span> 
        },



          {
            accessorKey: "Tổng tiền",
            header: "Tổng tiền",
            Cell: ({ renderedCellValue }) => <span>{renderedCellValue}</span> 
          },

  

          {
            accessorKey: "Thời gian",
            header: "Thời gian",
            Cell: ({ renderedCellValue }) => <span>{renderedCellValue}</span> 
          },

          
          {
            accessorKey: "Trạng thái", 
            header: "Trạng thái",
            Cell: ({ renderedCellValue }) => <span>{renderedCellValue}</span>
            
          },

          {
            accessorKey: "Chi tiết", 
            header: "Chi tiết",
            Cell: ({ renderedCellValue }) => <span>{renderedCellValue}</span>
            
          }
  
      ],
      []
    );

    const [data, setData] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:3000/api/Orders/')
        .then(response => {
          const formattedData = response.data.map(item => ({
            "ID": item.OrderID,
            "Người Mua": item.BuyerName,
            "Tổng tiền": item.TotalPrice,
            "Thời gian": item.CreateTime,
            "Trạng thái": item.Statuss,
            "Chi tiết": <Link to={`/Orders/${item.OrderID}`}>Chi Tiết</Link>,
          }));
          setData(formattedData); 
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []);
  
    return ( 
        
        <div className = "orders-container">

        <MaterialReactTable columns={columns} data={data}></MaterialReactTable>

        </div>
       
    );

    
  }
  