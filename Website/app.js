// app.js manages client-side data fetching and calls the Plotly graph creation function

document.addEventListener('DOMContentLoaded', function () {
    // Fetch data from server for Table 1
    fetch('http://localhost:3000/data/adhd')
        .then(response => response.json())
        .then(data => {
            // Log the received data for debugging
            console.log('Data received for ADHD:', data);
            // Call createPlotlyGraph function from plotlyGraph.js
            createPlotlyGraph(data, 'time_spent', 'ADHD_score','adhdGraph');
        })
        .catch(error => console.error('Error fetching data for ADHD:', error));

    // Fetch data from server for Anxiety
    fetch('http://localhost:3000/data/anxiety')
        .then(response => response.json())
        .then(data => {
            // Log the received data for debugging
            console.log('Data received for Anxiety:', data);
            // Call createPlotlyGraph function from plotlyGraph.js
            createPlotlyGraph(data, 'time_spent', 'Anxiety_score','anxietyGraph');
        })
        .catch(error => console.error('Error fetching data for Anxiety:', error));
    
    // Fetch data from server for Self-Esteem
    fetch('http://localhost:3000/data/self_esteem')
        .then(response => response.json())
        .then(data => {
            // Log the received data for debugging
            console.log('Data received for Self-Esteem:', data);
            // Call createPlotlyGraph function from plotlyGraph.js
            createPlotlyGraph(data, 'time_spent', 'SelfEsteem_score','selfEsteemGraph');
        })
        .catch(error => console.error('Error fetching data for Self-Esteem:', error));

    // Fetch data from server for Depression
    fetch('http://localhost:3000/data/depression')
        .then(response => response.json())
        .then(data => {
            // Log the received data for debugging
            console.log('Data received for Depression:', data);
            // Call createPlotlyGraph function from plotlyGraph.js
            createPlotlyGraph(data, 'time_spent', 'Depression_score', 'depressionGraph');
        })
        .catch(error => console.error('Error fetching data for Depression:', error));


});
