async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');
    
    try {
        const response = await fetch(apiUrl);
        const users = await response.json();
        
        dataContainer.innerHTML = ''; // Clear the loading message
        
        const userList = document.createElement('ul'); // Create unordered list
        
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name; // Set user's name as list item content
            userList.appendChild(listItem);   // Append list item to the unordered list
        });
        
        dataContainer.appendChild(userList); // Append user list to data container
    } catch (error) {
        dataContainer.innerHTML = 'Failed to load user data.'; // Handle errors
    }
}

document.addEventListener('DOMContentLoaded', fetchUserData); // Call function when DOM loads
