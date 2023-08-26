import sql from 'mssql'

var config = {
    server: "localhost",
    port : 1433, // Make sure to escape backslashes in the server name
    database: "shopping_website", // Corrected "databse" to "database"
    user: 'sa',
    password: "123",
    options: {
      enableArithAbort : true, 
      trustServerCertificate: true,
    },
    connectionTimeout: 150000, 
    pool: 
    { max : 10, min : 0, idleTimeoutMillis : 30000, },
    
  };
  

const getTotalRevenueLastMonth = async () => {
  const query = `
    SELECT SUM(TotalPrice) AS totalRevenue
    FROM orders
    WHERE MONTH(CreateTime) = MONTH(GETDATE()) - 1
      AND YEAR(CreateTime) = YEAR(GETDATE());
  `;

  try {
    const result = await pool.query(query);
    return result.recordset[0].totalRevenue || 0;
  } catch (error) {
    throw error;
  }
};

const getCategoryRevenueLastMonth = async () => {
  const query = `
  SELECT 
  c.CategoryName,
  SUM(od.Quantity * o.TotalPrice) AS CategoryMonthlyRevenue
FROM 
  orderdetails od
  JOIN orders o ON od.OrderID = o.OrderID
  JOIN products p ON od.ProductID = p.ProductID
  JOIN categories c ON p.CategoryID = c.CategoryID
WHERE 
  MONTH(o.CreateTime) = MONTH(GETDATE()) - 1
  AND YEAR(o.CreateTime) = YEAR(GETDATE())
GROUP BY 
  c.CategoryName;
  `;

  try {
    const result = await pool.query(query);
    return result.recordset || [];
  } catch (error) {
    throw error;
  }
};

export {
  getTotalRevenueLastMonth,
  getCategoryRevenueLastMonth,
};
