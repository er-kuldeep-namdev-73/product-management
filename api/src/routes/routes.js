import { Router } from "express";
import productRoutes from "./productRoutes.js"
const routes = Router()

routes.use("/api/products",productRoutes)
export default routes