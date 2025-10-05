const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  const { email, password } = loginForm.elements;
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (!emailValue || !passwordValue)
    return alert('All form fields must be filled in');

  const data = {
    email: emailValue,
    password: passwordValue,
  };

  console.log(data);
  loginForm.reset();
}
