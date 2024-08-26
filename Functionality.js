// script.js
document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const query = document.getElementById('searchInput').value;
    if (query) {
        performSearch(query);
    }
});

function performSearch(query) {
    const encodedQuery = encodeURIComponent(query);
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `<p>Showing results for: <strong>${query}</strong></p>`;
    
    // Simulate search results (you'd normally fetch these from an API)
    const dummyResults = [
        `Result 1 for ${query}`,
        `Result 2 for ${query}`,
        `Result 3 for ${query}`
    ];
    
    dummyResults.forEach(result => {
        const p = document.createElement('p');
        p.textContent = result;
        resultsDiv.appendChild(p);
    });
}
