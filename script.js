function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMessage = document.getElementById("formMessage");

  if (name === "" || email === "" || message === "") {
    formMessage.textContent = "Please fill all fields!";
    formMessage.style.color = "red";
    return false;
  } else {
    formMessage.textContent = "Thanks! Your message has been sent.";
    formMessage.style.color = "green";
    return false; // Prevent real submission for demo
  }
}
