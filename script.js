document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const fullName = document.getElementById("fullName");
    const email = document.getElementById("email");
    const country = document.getElementById("country");
    const comments = document.getElementById("comments");

    const fields = [fullName, email, country, comments];
    const emptyField = fields.find((field) => !field.value.trim());

    if (emptyField) {
      alert("Please fill in all fields before submitting.");
      emptyField.focus();
      return;
    }

    if (!email.checkValidity()) {
      alert("Please enter a valid email address.");
      email.focus();
      return;
    }

    alert("Your form has been submitted successfully. Thank you for reaching out!");
    form.reset();
  });
});
