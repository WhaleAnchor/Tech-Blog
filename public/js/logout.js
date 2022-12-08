// POST request function for logging out
const logout = async function() {
  const response = await fetch('/api/user/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
    alert('Logged out successfully!')
  } else {
    alert('Something went wrong.');
  }
};

document.querySelector('#logout-link').addEventListener('click', logout);
