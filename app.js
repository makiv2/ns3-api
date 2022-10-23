const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
require("dotenv").config();


//Middleware
app.use(bodyParser.json());
app.use(cors());


//Import Routers
const postsRoute = require("./routes/posts");
const userRoute = require("./routes/user");

app.use("/posts", postsRoute);
app.use("/user", userRoute);

//Routes
app.get("/", (req, res) => {
    res.send("We are on home");
});


//Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true, dbName: "NS3" },
    () => 
    console.log('connected!')
);

//Listning to port 3000
app.listen(3000, () => {
  console.log("Listening on port 3000");
});
