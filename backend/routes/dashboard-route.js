// revenue-route.js

import express from 'express';
const router = express.Router();
import * as DashboardService from '../services/Dashboard-service.js';


router.get("/total-revenue-last-month", async (req, res) => {
  try {
    const totalRevenue = await DashboardService.getTotalRevenueLastMonth();
    res.json({ totalRevenue });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/category-revenue-last-month", async (req, res) => {
  try {
    const categoryRevenue = await DashboardService.getCategoryRevenueLastMonth();
    res.json({ categoryRevenue });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
