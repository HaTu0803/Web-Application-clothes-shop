import React, { useMemo } from 'react';
import '../css/Orders.css';
import { MaterialReactTable } from 'material-react-table'; 
import picture from '../images/eye.svg';
import { BrowserRouter as Router,Routes, Route, NavLink } from 'react-router-dom';


const data = [
    {
      "Tên": "Hoàng Văn Tùng",
      "Email": "tungchic@gmail.com",
      "Tổng tiền" : 346.000,
      "Thanh toán" : "Tiền mặt",
     "Thời gian": "17/06/2023",
     "Trạng thái": "Đã xác nhận",
     "Chi tiết": <a href = './Order-detail' ><img src = {picture}></img></a>
    },
    {
        "Tên": "Trần Xuân Hương",
        "Email": "huong2002@gmail.com",
        "Tổng tiền" : 500.000,
        "Thanh toán" : "Tiền mặt",
       "Thời gian": "17/06/2023",
       "Trạng thái": "Thất bại",
       "Chi tiết": <a href = './Order-detail' ><img src = {picture}></img></a>
      },

      {
        "Tên": "Hoàng Văn Tùng",
        "Email": "tungchic@gmail.com",
        "Tổng tiền" : 346.000,
        "Thanh toán" : "Momo",
       "Thời gian": "17/06/2023",
       "Trạng thái": "Đã xác nhận",
       "Chi tiết": <a href = './Order-detail' ><img src = {picture}></img></a>
      },
  ];
  
  export default function Orders() {
   
    const columns = useMemo(
      () => [

        {
            accessorKey: "Tên", 
            header: "Tên",
            Cell: ({ renderedCellValue }) => <span>{renderedCellValue}</span> 
        },

        {
            accessorKey: "Email", 
            header: "Email",
            Cell: ({ renderedCellValue }) => <span>{renderedCellValue}</span> 
          },


          {
            accessorKey: "Tổng tiền",
            header: "Tổng tiền",
            Cell: ({ renderedCellValue }) => <span>{renderedCellValue}</span> 
          },

          {
            accessorKey: "Thanh toán",
            header: "Thanh toán",
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
  
    return ( 
        
        <div className = "orders-container">

        <MaterialReactTable columns={columns} data={data}></MaterialReactTable>

        </div>
       
    );

    
  }
  