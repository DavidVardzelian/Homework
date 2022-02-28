const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const pug = require("pug");
const methodOverride= require("method-override")

//Routes
const contactsRoutes = require('./routes/contacts-route')

const port = 5000;
const app = express();

app.set("view engine", "pug");
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(methodOverride('_method'))
app.use(express.static("public"));


app.get("/", (req, res) => {
  res.render("index");
});

app.use("/contacts", contactsRoutes)

app.use((req,res)=>{
  res.render('error')
})
app.listen(port, (err) => {
  err ? console.error(err) : console.log(`Server listen port --> ${port}`);
});