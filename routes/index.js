import express from "express";
import { userRoutes } from "./User.js";
import { productRoutes } from "./Products.js";

export const router = express.Router();

router.use('/users', userRoutes);
router.use('/products', productRoutes);
