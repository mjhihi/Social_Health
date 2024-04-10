// plotlyGraph.js
function createPlotlyGraph(data, xColumnName, yColumnName, divID) {
    // Extract x and y values from data
    console.log("insideplotly",data)
    const xValues = data.map(row => row[xColumnName]);
    const yValues = data.map(row => parseFloat(row[yColumnName]));

    const trace = {
        x: xValues,
        y: yValues,
        type: 'bar'

    };

    Plotly.newPlot(divID, [trace], {barmode: 'group'});
}

d3.request("http://127.0.0.1:3000/data/depression").get(response => {
    console.log(data);
    createPlotlyGraph(data, 'time_spent','Depression_score','depressionGraph')
})

d3.request("http://127.0.0.1:3000/data/anxiety").get(response => {
    console.log(data);
    createPlotlyGraph(data, 'time_spent','Anxiety_score','anxietyGraph')
})

d3.request("http://127.0.0.1:3000/data/adhd").get(response => {
    console.log(data);
    createPlotlyGraph(data, 'time_spent','ADHD_score','adhdGraph')
})

d3.request("http://127.0.0.1:3000/data/self_esteem").get(response => {
    console.log(data);
    createPlotlyGraph(data, 'time_spent','SelfEsteem_score','selfEsteemGraph')
})