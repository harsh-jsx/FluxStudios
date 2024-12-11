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
    console.log(data);
    // Make a post request to telegram bot
    fetch(
      `https://api.telegram.org/bot7797825340:AAGFM8UrqSb1F9Q5DpX_qHSPWArTHbw65-M/sendMessage?chat_id=5657917593&text= ${JSON.stringify(
        data
      )}`
    );

    // Set the form to success
    //Add a success message
    document.getElementById("form").reset();
    alert("Message sent successfully");
  } catch (err) {
    console.log(err);
  }
}

const form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);
