const searchInput = document.getElementById('search');
const searchButton = document.getElementById('search-button');
const scholarshipList = document.getElementById('scholarship-list');

searchButton.addEventListener('click', () => {
    const query = searchInput.value;
    if (query) {
        fetchScholarships(query);
    }
});

function fetchScholarships(query) {
    // Replace this with a real scholarship API endpoint
    // You can use XMLHttpRequest or fetch API to make API requests
    // Example: fetch('https://api.example.com/scholarships?q=' + query)
    
    // Mock data for demonstration purposes
    const mockData = [
        { name: 'International Scholarship 1', amount: '$5000', deadline: '2023-12-31' },
        { name: 'National Scholarship 1', amount: '$3000', deadline: '2023-11-30' },
        // Add more scholarship data here
    ];

    displayScholarships(mockData);
}

function displayScholarships(scholarships) {
    scholarshipList.innerHTML = '';

    if (scholarships.length === 0) {
        scholarshipList.innerHTML = 'No scholarships found.';
        return;
    }

    scholarships.forEach((scholarship) => {
        const scholarshipItem = document.createElement('div');
        scholarshipItem.classList.add('scholarship-item');
        scholarshipItem.innerHTML = `
            <h3>${scholarship.name}</h3>
            <p>Amount: ${scholarship.amount}</p>
            <p>Deadline: ${scholarship.deadline}</p>
        `;
        scholarshipList.appendChild(scholarshipItem);
    });
}
