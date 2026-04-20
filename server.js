const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname));

app.post("/boka", (req, res) => {

const name = req.body.name;
const email = req.body.email;
const date = req.body.date;

const booking = { name, email, date };

let bookings = [];

if (fs.existsSync("bookings.json")) {
bookings = JSON.parse(fs.readFileSync("bookings.json"));
}

bookings.push(booking);

fs.writeFileSync("bookings.json", JSON.stringify(bookings, null, 2));

console.log("Ny bokning:", booking); 

res.redirect("/success.html");

});

app.get("/bookings", (req, res) => {

const fs = require("fs");

let bookings = [];

if (fs.existsSync("bookings.json")) {
bookings = JSON.parse(fs.readFileSync("bookings.json"));
}

res.json(bookings);

});

app.listen(3000, () => {
console.log("Server running on http://localhost:3000");
});
