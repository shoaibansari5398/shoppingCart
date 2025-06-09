var express = require("express");
var path = require("path");
var productsRouter = require("./routes/productRouter");
const usersRouter = require("./routes/userRouter");
const cors = require("cors")

var app = express();
var PORT = 3000;
var empArr = [
  { id: 1, name: "John Doe", position: "Software Engineer" },
  { id: 2, name: "Jane Smith", position: "Project Manager" },
  { id: 3, name: "Alice Johnson", position: "UX Designer" }
];

var corsOption = {
  origin:"http://localhost:4200"
}


app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOption))
app.use("/products", productsRouter);
app.use("/users", usersRouter);


app.get("/",(req,res)=>{
var filePath = path.join(__dirname,"public","index.html");
res.sendFile(filePath);
})

app.get("/employees",(req,res)=>{
    res.json(empArr)
})

app.get("/about",(req,res)=>{
    res.status(401).send("Data not Found")
    res.end();
})

app.get("/login",(req,res)=>{
var filePath = path.join(__dirname,"public","login.html");
res.sendFile(filePath);
})

app.post("/login",(req,res)=>{
    console.log("Request body as part of login ",req.body)
    res.send({status:true,message:"Login Successful"})
})

app.listen(PORT, function (err) {
  if (!err) {
    console.log(`App listening on port ${PORT}!`);
  }
});
