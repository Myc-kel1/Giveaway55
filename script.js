

// Set the initial end date for the giveaway
let endDate = new Date();
endDate.setDate(endDate.getDate() + 10); 
endDate.setHours(11, 30, 0, 0);
// Set the end date to 10 days from now

function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = endDate - now;

  // Check if the countdown has reached zero
  if (timeLeft <= 0) {
    // If it has, reset the end date to another 10 days from now
    endDate = new Date();
    endDate.setDate(endDate.getDate() + 10);
  }

  // Calculate the days, hours, minutes, and seconds
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Display the countdown values on the page
  document.getElementById('days').textContent = days.toString().padStart(2, '0');
  document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
  document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
  document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

// Update the countdown every second
setInterval(updateCountdown, 1000);