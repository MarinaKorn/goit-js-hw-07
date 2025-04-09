const form = document.querySelector(".login-form");

form.addEventListener("submit", event => {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;
  const emailVal = email.value.trim();
  const passwordVal = password.value.trim();

  if (!emailVal || !passwordVal) {
    return alert("All form fields must be filled in");
  }

  const userData = {
    email: emailVal,
    password: passwordVal,
  };

  console.log(userData);
  form.reset();
});
