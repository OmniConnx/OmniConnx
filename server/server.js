const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
//const app = require('/server/www/bin/app.js');
const port = 5000;
//"start": "concurrently \"react-scripts start\" \"cd backend && nodemon server\"",

dotenv.config();

const app = express();

var corsOptions = {
  origin: "http://localhost:5000"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//database
const db = require("./models/index");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

// app.post("/user", (req, res) => {
//   try{
//       const { first_name } = req.body;
//   } catch (err) {
//       console.log(err);
//   }
// });

require("./routes/userRoutes")(app);
//require("./routes/postRoutes")(app);
// set port, listen for requests
//
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});