// app.js manages client-side data fetching and calls the Plotly graph creation function

document.addEventListener('DOMContentLoaded', function () {
    // Fetch data from server for Table 1
    fetch('http://localhost:3000/data/adhd')
        .then(response => response.json())
        .then(data => {
            // Log the received data for debugging
            console.log('Data received for ADHD:', data);
            // Call createPlotlyGraph function from plotlyGraph.js
            createPlotlyGraph(data, 'time_spent', 'ADHD_score','adhdGraph', 'Time Spent on Media vs. ADHD Scores', 'Time Spent on Media', 'ADHD Scores','4F709C');
        })
        .catch(error => console.error('Error fetching data for ADHD:', error));



    // Fetch data from server for Anxiety
    fetch('http://localhost:3000/data/anxiety')
        .then(response => response.json())
        .then(data => {
            // Log the received data for debugging
            console.log('Data received for Anxiety:', data);
            // Call createPlotlyGraph function from plotlyGraph.js
            createPlotlyGraph(data, 'time_spent', 'Anxiety_score','anxietyGraph', 'Time Spent on Media vs. Anxiety Scores', 'Time Spent on Media', 'Anxiety Scores','F3B664');
        })
        .catch(error => console.error('Error fetching data for Anxiety:', error));
 
        
    // Fetch data from server for Self-Esteem
    fetch('http://localhost:3000/data/self_esteem')
        .then(response => response.json())
        .then(data => {
            // Log the received data for debugging
            console.log('Data received for Self-Esteem:', data);
            // Call createPlotlyGraph function from plotlyGraph.js
            createPlotlyGraph(data, 'time_spent', 'SelfEsteem_score','selfEsteemGraph','Time Spent on Media vs. Self-Esteem Scores', 'Time Spent on Media', 'Self-Esteem Scores','E5D283');
        })
        .catch(error => console.error('Error fetching data for Self-Esteem:', error));


    // Fetch data from server for Depression
    fetch('http://localhost:3000/data/depression')
        .then(response => response.json())
        .then(data => {
            // Log the received data for debugging
            console.log('Data received for Depression:', data);
            // Call createPlotlyGraph function from plotlyGraph.js
            createPlotlyGraph(data, 'time_spent', 'Depression_score', 'depressionGraph', 'Time Spent on Media vs. Depression Scores', 'Time Spent on Media', 'Depression Scores', '#213555');
        })
        .catch(error => console.error('Error fetching data for Depression:', error));

    // Fetch data from server for states_mh
    fetch('http://localhost:3000/data/states_mh')
        .then(response => response.json())
        .then(data => {
            // Log the received data for debugging
            console.log('Data received for states_mh:', data);
        })
        .catch(error => console.error('Error fetching data for states_mh:', error));

    
});
