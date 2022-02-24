//Code for Gasoline Gallon
google.charts.load('current', {'packages':['corechart', 'bar']});
google.charts.setOnLoadCallback(drawStuff);

function drawStuff() {

    var button = document.getElementById('change-chart');
    var chartDiv = document.getElementById('flow-charts-1');

    var data = google.visualization.arrayToDataTable([
        ['Source', 'Max Lifetime (years)', 'Efficiency (%)'],
        ['Pumped Hydrogen',  45, 70],
        ['Compressed Air', 20, 40],
        ['Thermal',  30, 80],
        ['Lithium-Ion Battery',  35, 85],
        ['Lead-Acid Battery',  20, 80],
        ['Hydrogen',  15, 25],
        ['Flywheel',  40, 70],
        ['Flow Battery',  50, 60]
    ]);
    //
    // var materialOptions = {
    //     width: 900,
    //     chart: {
    //         title: 'Gasoline Gallon Equivalent, and Energy Content of Various Fuels',
    //         subtitle: 'GGE on the left, EC on the right'
    //     },
    //     series: {
    //         0: { axis: 'GGE' }, // Bind series 0 to an axis named 'distance'.
    //         1: { axis: 'EC' } // Bind series 1 to an axis named 'brightness'.
    //     },
    //     axes: {
    //         y: {
    //             distance: {label: 'GGE'}, // Left y-axis.
    //             brightness: {side: 'right', label: 'Btu/gal'} // Right y-axis.
    //         }
    //     }
    // };

    var classicOptions = {
        width: 900,
        series: {
            0: {targetAxisIndex: 0},
            1: {targetAxisIndex: 1}
        },
        title: 'Lifetime and Efficiency of Different Energy Storage Methods',
        vAxes: {
            // Adds titles to each axis.
            0: {title: 'Lifetime (years)'},
            1: {title: 'Efficiency (%)'}
        }
    };

//   function drawMaterialChart() {
//     var materialChart = new google.charts.Bar(chartDiv);
//     materialChart.draw(data, google.charts.Bar.convertOptions(materialOptions));
//     button.innerText = 'Change to Classic';
//     button.onclick = drawClassicChart;
//   }

    function drawClassicChart() {
        var classicChart = new google.visualization.ColumnChart(chartDiv);
        classicChart.draw(data, classicOptions);
        button.innerText = 'Change to Material';
        button.onclick = drawMaterialChart;
    }

    drawClassicChart();
};