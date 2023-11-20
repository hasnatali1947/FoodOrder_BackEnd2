const express = require("express");
const app = express();
const db = require("./db.js");
const pizzaRoute = require("./routes/pizzaRoutes")
const ragisterRoute = require("./routes/registerRoute")
const loginRouter = require("./routes/loginRoute");
const pizzas = require("./pizzaData")
const cors = require("cors");
const orderRoute = require("./routes/ordersRoute")
const MyorderRoute = require("./routes/myOrderRoute")
const pizzaApiRoute = require("./routes/pizzaApiRoute")
const markDelivered = require("./routes/markDelivered")
const deleteRouter = require("./routes/deletePizzaRoute")
const AdminLogin = require("./routes/adminLogin")
const Admin = require("./models/register")

var bodyParser = require('body-parser');
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));

app.get("/", (req, res) => {
  res.send("Server is working");
});

app.use(express.json());
app.use(cors());

app.use('/api/pizzas', pizzaRoute);
app.use("/api/user", ragisterRoute);
app.use("/api/user", loginRouter);
app.use("/api/markDelivered", markDelivered);
app.use("/api/order", orderRoute);
app.use("/api/myorder", MyorderRoute);
app.use("/api/pizzaApiRoute", pizzaApiRoute);
app.use("/api/deletePizza", deleteRouter);
app.use("/api/AdminLogin", AdminLogin);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
