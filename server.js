const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));


mongodb+srv;//tell2000wdalkar_adminuser414ahmed-710:Wdalkar.tell2000!@cluster0.xcjwhoh.mongodb.net/?appName=Cluster0
mongoose.connect("PUT_YOUR_MONGODB_LINK_HERE")
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));


// Schema
const bookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  date: String
});

const Booking = mongoose.model("Booking", bookingSchema);


// POST (حجز)
app.post("/boka", async (req, res) => {
  const { name, email, date } = req.body;

  const booking = new Booking({ name, email, date });
  await booking.save();

  res.send("Bokning mottagen");
});


// GET (عرض الحجوزات)
app.get("/bookings", async (req, res) => {
  const bookings = await Booking.find();
  res.json(bookings);
});


app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
