// plotlyGraph.js

export function createPlotlyGraph(data, xColumnName, yColumnName) {
    // Extract x and y values from data
    const xValues = data.map(row => row[xColumnName]);
    const yValues = data.map(row => parseFloat(row[yColumnName]));

    const trace = {
        x: xValues,
        y: yValues,
        type: 'bar',
    };

    Plotly.newPlot('plotlyBarGraph', [trace], {barmode: 'group'});
}
