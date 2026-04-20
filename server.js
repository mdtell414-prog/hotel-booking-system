const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname));

/* تأكد أن الملف موجود */
if (!fs.existsSync("bookings.json")) {
  fs.writeFileSync("bookings.json", "[]");
}

/* إضافة حجز */
app.post("/boka", (req, res) => {
  const { name, email, date } = req.body;

  const booking = { name, email, date };

  let bookings = [];

  try {
    bookings = JSON.parse(fs.readFileSync("bookings.json"));
  } catch {
    bookings = [];
  }

  bookings.push(booking);

  fs.writeFileSync("bookings.json", JSON.stringify(bookings, null, 2));

  console.log("Ny bokning:", booking);

  res.redirect("/success.html");
});

/* جلب الحجوزات */
app.get("/bookings", (req, res) => {
  let bookings = [];

  try {
    bookings = JSON.parse(fs.readFileSync("bookings.json"));
  } catch {
    bookings = [];
  }

  res.json(bookings);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
