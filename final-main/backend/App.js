var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var multer = require("multer");

var app = express();
app.use(cors());
app.use(bodyParser.json());
const port = "8081";
const host = "localhost";


// MySQL
const mysql = require("mysql2");
const db = mysql.createConnection({
    host: "localhost",
    port: 3307,
    user: "root",
    password: "Password123",
    database: "secoms3190",
});

//multer setup
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + Path2D.extname(file.originalname));
    }
});
const upload = multer({storage: storage});

//create uploads folder if not exist
const fs = require("fs");
if (!fs.existsSync("uploads")) {
    fs.mkdirSync("uploads");
}

//confirm modules
var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static("public"));
app.use("/uploads", express.static("uploads"));


// get all
app.get("/menu", (req, res) => {
    try {
        db.query("SELECT * FROM menu", (err, result) => {
            if (err) {
                console.error({error: "Error reading all items:" + err});
                return res.status(500).send({error: "Error reading all items" + err});
            }
            res.status(200).send(result);
        });
    } catch (err) {
        console.error({error: "An unexpected error occured" + err});
        res.status(500).send({error: "An unepexted error occured" + err});
    }
});

// post request
app.post("/menu", (req, res) => {
    const {name, calories, cost, category, servingsize} = req.body;
    const query = "INSERT INTO menu(name, calories, cost, category, servingsize) VALUES (?, ?, ?, ?, ?)";
    try {
        db.query(query, [name, calories, cost, category, servingsize], (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send({error: "Error adding food item" + err});
            } else {
                res.status(201).send("Item successfully added to menu.");
            }
        });
    } catch (err) {
        console.error("Error in POST /menu:", err);
        res.status(500).send({ error: "An unexpected error occurred: " + err.message });
    }

});

app.listen(port, () => {
    console.log("App listening at http://%s:%s", host, port);
    });