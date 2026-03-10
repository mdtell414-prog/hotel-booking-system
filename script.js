document.addEventListener("DOMContentLoaded", function () {

const bookingForm = document.querySelector("#bookingForm");
const contactForm = document.querySelector("#contactForm");

if (bookingForm) {
bookingForm.addEventListener("submit", function (event) {
event.preventDefault();
alert("Tack! Din bokning har skickats.");
});
}

if (contactForm) {
contactForm.addEventListener("submit", function (event) {
event.preventDefault();
alert("Tack för ditt meddelande! Vi återkommer snart.");
});
}

});