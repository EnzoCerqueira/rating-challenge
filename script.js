const submitButton = document.querySelector(".submit");
const ratingButtons = document.querySelectorAll(".rating");
const content = document.querySelector(".content");
const thankYouMessage = document.getElementById("thank-you");
const cardRating = document.querySelector(".card-rating");
const spanRating = document.getElementById("span-rating");

const handleSubmit = (e) => {
  e.preventDefault();

  const selectedRating = document.querySelector(
    '.rating input[type="radio"]:checked',
  );
  if (!selectedRating) {
    alert("Please select a rating before submitting.");
    return;
  }
  if (selectedRating) {
    const ratingValue = selectedRating.value;
    console.log(ratingValue);
  }

  cardRating.classList.add("hidden");
  thankYouMessage.classList.remove("hidden");

  spanRating.textContent = selectedRating.value;
};

submitButton.addEventListener("click", handleSubmit);
