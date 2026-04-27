const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

let bookings = [];

app.post("/boka", (req, res) => {
  const { name, email, date } = req.body;

  const booking = { name, email, date };

  bookings.push(booking);

  console.log("Ny bokning:", booking);

 res.redirect("/success.html");
});

app.get("/bookings", (req, res) => {
  res.json(bookings);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
})
