// app.js manages client-side data fetching and calls the Plotly graph creation function

document.addEventListener('DOMContentLoaded', function () {
    // Fetch data from server for Table 1
    fetch('http://localhost:3000/data/adhd')
        .then(response => response.json())
        .then(data => {
            // Log the received data for debugging
            console.log('Data received for ADHD:', data);
            // Call createPlotlyGraph function from plotlyGraph.js
            createPlotlyGraph(data, 'ADHD1', 'ADHD_score');
        })
        .catch(error => console.error('Error fetching data for ADHD:', error));

    // Fetch data from server for Anxiety
    fetch('http://localhost:3000/data/anxiety')
        .then(response => response.json())
        .then(data => {
            // Log the received data for debugging
            console.log('Data received for Anxiety:', data);
            // Call createPlotlyGraph function from plotlyGraph.js
            createPlotlyGraph(data, 'anxiety1', 'Anxiety_score');
        })
        .catch(error => console.error('Error fetching data for Anxiety:', error));
    
    // Fetch data from server for Self-Esteem
    fetch('http://localhost:3000/data/self_esteem')
        .then(response => response.json())
        .then(data => {
            // Log the received data for debugging
            console.log('Data received for Self-Esteem:', data);
            // Call createPlotlyGraph function from plotlyGraph.js
            createPlotlyGraph(data, 'Self_Esteem1', 'SelfEsteem_score');
        })
        .catch(error => console.error('Error fetching data for Self-Esteem:', error));

    // Fetch data from server for Depression
    fetch('http://localhost:3000/data/depression')
        .then(response => response.json())
        .then(data => {
            // Log the received data for debugging
            console.log('Data received for Depression:', data);
            // Call createPlotlyGraph function from plotlyGraph.js
            createPlotlyGraph(data, 'Depression1', 'Depression_score');
        })
        .catch(error => console.error('Error fetching data for Depression:', error));


});
