const loginFormHandler = async function(event) {
  event.preventDefault();

  // DOM var
  const usernameInput = document.querySelector('#loginInput');
  const passwordInput = document.querySelector('#passwordInput');

  // Takes the user's input and waits from api for response
  const response = await fetch('/api/user/login', {
    method: 'POST',
    body: JSON.stringify({
      username: usernameInput.value,
      password: passwordInput.value,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/dashboard');
    console.log(user);
  } else {
    alert('Something went wrong. Failed to login.');
  };
};

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
