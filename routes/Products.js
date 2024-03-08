import express from "express";
export const productRoutes = express.Router();

productRoutes.get('/', (req, res) => {
  res.send('Products Route');
});

// module.exports = router;