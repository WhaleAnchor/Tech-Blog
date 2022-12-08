// POST request function to make a new account
const signupHandler = async function(event) {
  event.preventDefault();

  // DOM variables
  const username = document.querySelector('#usernameInput').value.trim();
  const password = document.querySelector('#passwordInput').value.trim();

  const response = await fetch('/api/user', {
    method: 'POST',
    body: JSON.stringify({
      username, password
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Something went wrong. Failed to sign up.');
  }
};

document.querySelector('.signup-form').addEventListener('submit', signupHandler);
