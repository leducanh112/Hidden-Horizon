function scrollToSignUp() {
  document.getElementById("signup").scrollIntoView({ behavior: "smooth" });
}

function scrollToExplore() {
  document.getElementById("explore").scrollIntoView({ behavior: "smooth" });
}

function scrollToProblemSolution() {
  document
    .getElementById("problem-solution")
    .scrollIntoView({ behavior: "smooth" });
}

function sendData(event) {
  var email = document.getElementById("email-input");
  if (!email.checkValidity()) {
    Swal.fire({
      icon: "warning",
      title: "Please enter a valid email!",
      text: "",
      confirmButtonColor: "#d33",
    });
    return;
  }
  var url =
    "https://script.google.com/macros/s/AKfycbz4a-C8ew0vgfIIWLN8GN8YYFzIe87kHVrVbXMP1L4FVWjZZ2Sit1xZxQ7wtswsdIA/exec";
  fetch(url, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: email.value }),
  }).then(() => {
    Swal.fire({
      icon: "success",
      title: "Success!",
      text: "Email submitted successfully!",
      confirmButtonColor: "#4CAF50",
    });
    email.value = "";
  });
}
