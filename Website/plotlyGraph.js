// plotlyGraph.js
function createPlotlyGraph(data, xColumnName, yColumnName, divID, title, xLabel, yLabel, barColor) {
    // Extract x and y values from data
    const xValues = data.map(row => row[xColumnName]);
    const yValues = data.map(row => parseFloat(row[yColumnName]));

    // Define custom category order
    const categoryOrder = ["0-1 hour", "1-2 hours", "2-3 hours", "3-4 hours", "4-5 hours", "5+ hours"];

    // Create a custom sorting function based on category order
    const customSort = (a, b) => {
        return categoryOrder.indexOf(a) - categoryOrder.indexOf(b);
    };

    // Sort x-values based on the custom sorting function
    const sortedXValues = xValues.sort(customSort);

    const trace = {
        x: xValues,
        y: yValues,
        type: 'box',
        marker: {
            color: barColor
        }

    };

    const layout = {
        title: {
            text: title,
            font: {
                size: 18, 
                family: 'Arial, sans-serif', 
                color: '#000', 
                weight: 'bold' 
            }
        },
        xaxis: {
            title: xLabel
        },
        yaxis: {
            title: yLabel,
            range: [0, 22]
        },
        width: '80%',
        height: '80%'
    };


    Plotly.newPlot(divID, [trace], layout);
}

// Function to reorder x-values
function reorderXValues(xValues) {
    const orderedCategories = ["0-1 hour", "1-2 hours", "2-3 hours", "3-4 hours", "4-5 hours", "5+ hours"];
    return xValues.map(value => orderedCategories.find(category => value.includes(category)));
}



//depression
d3.request("http://127.0.0.1:3000/data/depression").get(response => {
    console.log(data);
    createPlotlyGraph(data, 'time_spent','Depression_score','depressionGraph', 'Time Spent on Media vs. Depression Scores', 'Time Spent on Media', 'Depression Scores', '#213555')
})


//anxiety
d3.request("http://127.0.0.1:3000/data/anxiety").get(response => {
    console.log(data);
    createPlotlyGraph(data, 'time_spent','Anxiety_score','anxietyGraph', 'Time Spent on Media vs. Anxiety Scores', 'Time Spent on Media', 'Anxiety Scores','F3B664')
})


//adhd
d3.request("http://127.0.0.1:3000/data/adhd").get(response => {
    console.log(data);
    createPlotlyGraph(data, 'time_spent','ADHD_score','adhdGraph', 'Time Spent on Media vs. ADHD Scores', 'Time Spent on Media', 'ADHD Scores','4F709C')
})


//self-esteem
d3.request("http://127.0.0.1:3000/data/self_esteem").get(response => {
    console.log(data);
    createPlotlyGraph(data, 'time_spent','SelfEsteem_score','selfEsteemGraph', 'Time Spent on Media vs. Self-Esteem Scores', 'Time Spent on Media', 'Self-Esteem Scores','E5D283')
})

//


