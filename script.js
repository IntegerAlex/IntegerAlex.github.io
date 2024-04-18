document.addEventListener("DOMContentLoaded", function() {
    const statsList = document.getElementById('stats-list');
    const userDetailsContainer = document.getElementById('user-details');
    const linkedInLink = document.getElementById('linkedin-link');
    
    fetch('https://api.github.com/users/IntegerAlex')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Display user details
            const userDetails = `
                <img src="${data.avatar_url}" alt="Avatar" style="width: 100px; height: 100px;">
                <h2>${data.name}</h2>
                <p>${data.bio}</p>
            `;
            userDetailsContainer.innerHTML = userDetails;
            
            // Display user statistics
            const stats = [
                { label: 'Repositories', value: data.public_repos },
                { label: 'Followers', value: data.followers },
                { label: 'Following', value: data.following }
            ];
            
            stats.forEach(stat => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `<strong>${stat.label}:</strong> ${stat.value}`;
                statsList.appendChild(listItem);
            });

            // Add LinkedIn profile link
            linkedInLink.href = 'https://www.linkedin.com/in/akshat-kotpalliwar-554944258/';
            linkedInLink.textContent = 'LinkedIn Profile';
        })
        .catch(error => {
            console.error('Error fetching GitHub stats:', error);
            const errorItem = document.createElement('li');
            errorItem.textContent = 'Failed to fetch GitHub stats';
            statsList.appendChild(errorItem);
        });
});
