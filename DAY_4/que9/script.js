const loading = document.querySelector('#loading');
const userList = document.querySelector('#userList');
const error = document.querySelector('#error');

async function fetchUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    
    loading.style.display = 'none';
    
    users.forEach(user => {
      console.log(user.name);
      const li = document.createElement('li');
      li.textContent = user.name;
      userList.appendChild(li);
    });
  } catch (err) {
    loading.style.display = 'none';
    error.textContent = 'Error loading data!';
    error.style.display = 'block';
  }
}

fetchUsers();
