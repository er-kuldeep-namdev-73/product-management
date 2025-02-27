import express from "express"
import routes from "./src/routes/routes.js";
import cors from 'cors'
import connectDB from "./src/config/db.js";

const app = express();
app.disable("x-powered-by");


const PORT = process.env.port || 8000;

const allowedOrigins = "*";


const corsOptions={
   origin:(origin,callback)=>{
     if(!origin || allowedOrigins !== ""){
        callback(null,origin)
     }else {
        callback(new Error("Not allowed by cors"))
     }
   },
   credentials:true
}
// middleware
app.use(express.json())
app.use(cors(corsOptions))
app.use('/',routes);
connectDB();



app.listen(PORT,()=>{
  console.log(`server is running in this ${PORT}`)
})