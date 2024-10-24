// Header scroll
let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


window.addEventListener('scroll', () => {
  header.classList.toggle('shadow', window.scrollY > 0);
});
menu.onclick = () => {
  menu.classList.toggle('bx-x');
 navbar.classList.toggle('active');
};
window.onscroll = () => {
  menu.classList.remove('bx-x');
 navbar.classList.remove('active');
};

// Swiper
var swiper = new Swiper(".home", {
  spaceBetween: 10,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// New update for special event
// Set the countdown to 10 days from now
const eventDate = new Date().getTime() + (10 * 24 * 60 * 60 * 1000);

// Function to format numbers to always show two digits
function formatNumber(num) {
  return num < 10 ? `0${num}` : num;
}

// Array of time elements (days, hours, minutes, seconds)
const timeElements = [
  document.getElementById("days"),
  document.getElementById("hours"),
  document.getElementById("minutes"),
  document.getElementById("seconds"),
];

// Function to update the countdown
function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = eventDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Update the HTML with the new values
  timeElements[0].innerText = formatNumber(days);
  timeElements[1].innerText = formatNumber(hours);
  timeElements[2].innerText = formatNumber(minutes);
  timeElements[3].innerText = formatNumber(seconds);

  // If the countdown is finished
  if (timeLeft < 0) {
    clearInterval(timerInterval);
    document.getElementById("event-description").innerText =
      "The event has started!";
  }
}

// Update the countdown every second
const timerInterval = setInterval(updateCountdown, 1000);
