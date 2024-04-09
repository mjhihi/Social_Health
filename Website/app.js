document.addEventListener('DOMContentLoaded', function () {
    // Fetch data from server
    fetch('http://localhost:3000/data')
        .then(response => response.json())
        .then(data => {
            // Populate data table
            const tableBody = document.getElementById('tableBody');
            data.forEach(row => {
                const tr = document.createElement('tr');
                tr.innerHTML = `<td>${row.ID}</td><td>${row.timestamp}</td><td>${row.ADHD1}</td><td>${row.ADHD2}</td><td>${row.ADHD3}</td><td>${row.ADHD4}</td><td>${row.ADHD_score}</td>`;
                tableBody.appendChild(tr);
            });

            // Create data for bar graph
            const ADHD1 = data.map(row => row.ADHD1);
            const ADHD_score = data.map(row => row.ADHD_score);

            // Create bar trace
            const trace = {
                x: ADHD1,
                y: ADHD_score,
                type: 'bar'
            };

            // Layout for bar graph
            const layout = {
                title: 'Data Visualization',
                xaxis: { title: 'ADHD1' },
                yaxis: { title: 'ADHD_SCORE' }
            };

            // Plot graph
            Plotly.newPlot('graph', [trace], layout);
        })
        .catch(error => console.error('Error fetching data:', error));
});
