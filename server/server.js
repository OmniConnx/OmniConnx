const express = require("express")
const dotenv = require("dotenv")
const cookieParser = require("cookie-parser")
const cors = require("cors")
//const app = require('/index.js');
//"start": "concurrently \"react-scripts start\" \"cd backend && nodemon server\"",

dotenv.config()

const path = __dirname + '/views/';
const app = express();


var corsOptions = {
  origin: "http://localhost:8081",
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path));


//database
const db = require("./models/index")
db.mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING || db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!")
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err)
    process.exit()
  })

if (process.env.NODE_ENV === "production") {
  app.use(express.static("../client/build"))
}
// app.post("/user", (req, res) => {
//   try{
//       const { first_name } = req.body;
//   } catch (err) {
//       console.log(err);
//   }
// });

  app.get('/', function (req,res) {
    res.sendFile(path + "index.html");
  });

<<<<<<< HEAD
require("./routes/userRoutes")(app)
=======
require("./routes/userRoutes")(app);
require("./routes/postRoutes")(app);

>>>>>>> origin/testserver
//require('./src/http-common')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})


// set port, listen for requests
//
