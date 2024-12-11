function handleSubmit(e) {
  e.preventDefault();
  const fullname = document.getElementById("fullname").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("number").value;
  const message = document.getElementById("message").value;

  const data = {
    fullname: fullname,
    email: email,
    phone: phone,
    message: message,
  };

  try {
    fetch("http://localhost:4000/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch (err) {
    console.log(err);
  }
}

const form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);
