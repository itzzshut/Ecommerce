import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";
import cors from "cors"; // 👈 Add CORS

import authRoutes from "./routes/auth.route.js";
import productRoutes from "./routes/product.route.js";
import cartRoutes from "./routes/cart.route.js";
import couponRoutes from "./routes/coupon.route.js";
import paymentRoutes from "./routes/payment.route.js";
import analyticsRoutes from "./routes/analytics.route.js";

import { connectDB } from "./lib/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const HOST = "0.0.0.0"; // 👈 For Render to listen on all interfaces

const __dirname = path.resolve();

import cors from "cors";


console.log("✅ CORS enabled for:", allowedOrigins);


app.use(express.json({ limit: "10mb" })); // parse JSON body
app.use(cookieParser());

const allowedOrigins = [
    "https://ecommerce-topaz-zeta.vercel.app", // Your Vercel frontend
    "http://localhost:5173" // Local frontend
];

app.use(cors({
    origin: allowedOrigins,
    credentials: true, // Allow cookies/auth headers
}));
console.log("✅ CORS enabled for:", allowedOrigins);
// API routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/coupons", couponRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/analytics", analyticsRoutes);

// Remove this block because frontend is on Vercel
// if (process.env.NODE_ENV === "production") {
// 	app.use(express.static(path.join(__dirname, "/frontend/dist")));
// 	app.get("*", (req, res) => {
// 		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
// 	});
// }

app.get("/", (req, res) => {
    res.send("🚀 Backend is running!");
});

app.listen(PORT, HOST, () => {
	console.log(`Server is running on http://${HOST}:${PORT}`);
	connectDB();
});
