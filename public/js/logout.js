// Javascript for our Logout button - sends a request to our post method to logout the user using the application.

const logout = async () => {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Log out failed');
    }
  };
  
  document.querySelector('#logout').addEventListener('click', logout);