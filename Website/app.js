// app.js-- app.js is responsible for fetching data from the server and creating the Plotly bar graph. 

document.addEventListener('DOMContentLoaded', function () {
    // Fetch data from server and create graph
    fetch('http://localhost:3000/data')
        .then(response => response.json())
        .then(data => {

            // Log the received data for debugging
            console.log('Data received from server:', data);
            // Extract data for x and y axes
            const ADHD1 = data.map(entry => entry.ADHD1);
            const ADHD_score = data.map(entry => entry.ADHD_score);

            // Log ADHD1 and ADHD_score to console for debugging
            console.log('ADHD1:', ADHD1);
            console.log('ADHD_score:', ADHD_score);

            // Create bar trace
            const trace = {
                x: ADHD1,
                y: ADHD_score,
                type: 'bar'
            };

            // Layout for bar graph
            const layout = {
                title: 'Plotly Bar Graph',
                xaxis: { title: 'ADHD1' },
                yaxis: { title: 'ADHD Score' }
            };

            // Plot graph
            Plotly.newPlot('graph', [trace], layout);
        })
        .catch(error => console.error('Error fetching data:', error));
});
