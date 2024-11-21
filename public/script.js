document.getElementById('registration-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
  
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
  
    const data = { firstName, lastName, email, username, password };
  
    fetch('/api/form/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(result => {
        alert(result.message);

        if (result.status === 201) {
            document.getElementById('registration-form').reset();
          }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });
  