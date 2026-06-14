const seatsContainer = document.getElementById("seats");

for (let i = 1; i <= 48; i++) {
    let seat = document.createElement("div");
    seat.classList.add("seat");
    seat.dataset.seat = i;
    seatsContainer.appendChild(seat);
}

const movieCards = document.querySelectorAll(".movie-card");
const movieName = document.getElementById("movieName");
const seatCount = document.getElementById("seatCount");
const total = document.getElementById("total");

let ticketPrice = 250;

movieCards.forEach(card => {
    card.addEventListener("click", () => {

        movieCards.forEach(c => c.classList.remove("selected"));

        card.classList.add("selected");

        movieName.textContent =
            card.querySelector("h3").textContent;

        ticketPrice =
            parseInt(card.dataset.price);

        updateTotal();
    });
});

document.addEventListener("click", (e) => {

    if (e.target.classList.contains("seat")) {
        e.target.classList.toggle("selected");
        updateTotal();
    }

});

function updateTotal() {

    const selectedSeats =
        document.querySelectorAll(".seat.selected").length;

    seatCount.textContent = selectedSeats;

    total.textContent =
        selectedSeats * ticketPrice;
}

const bookingBtn = document.querySelector("button");

bookingBtn.addEventListener("click", () => {

    const selectedSeats =
        document.querySelectorAll(".seat.selected").length;

    if (selectedSeats === 0) {
        alert("Please select at least one seat!");
        return;
    }

    alert(
        `Booking Confirmed!\n\nMovie: ${movieName.textContent}\nSeats: ${selectedSeats}\nTotal Amount: ₹${total.textContent}`
    );

});
const cinema = document.getElementById("cinema");
const showDate = document.getElementById("showDate");
const showTime = document.getElementById("showTime");

const selectedCinema =
document.getElementById("selectedCinema");

const selectedDate =
document.getElementById("selectedDate");

const selectedTime =
document.getElementById("selectedTime");

cinema.addEventListener("change", () => {
    selectedCinema.textContent = cinema.value;
});

showDate.addEventListener("change", () => {
    selectedDate.textContent = showDate.value;
});

showTime.addEventListener("change", () => {
    selectedTime.textContent = showTime.value;
});
const dateInput = document.getElementById("date");

// Get today's date
const today = new Date().toISOString().split("T")[0];

// Prevent past dates
dateInput.min = today;

// Set today's date as default
dateInput.value = today;s