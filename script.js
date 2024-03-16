document.addEventListener("DOMContentLoaded", function() {
    const statsList = document.getElementById('stats-list');
    
    fetch('https://api.github.com/users/IntegerAlex')
    .then(response => response.json())
    .then(data => {
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
    })
    .catch(error => {
        console.error('Error fetching GitHub stats:', error);
    });
});
