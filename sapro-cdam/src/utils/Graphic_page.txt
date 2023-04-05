import React, { Component } from 'react'; // { useState } ??? 
import ReactDOM from 'react-dom';
import { Storage } from 'aws-amplify';
import { styled } from '@mui/material/styles';
import { Grid, Box, Paper, Button, Snackbar, Alert, Menu, MenuItem, Typography } from '@mui/material';
// https://formidable.com/open-source/victory/
import { VictoryChart, VictoryContainer, VictoryBar, VictoryPie, }  from 'victory'
// https://www.youtube.com/watch?v=KuWLhLFfeRc Youtube - user 'Arslan' - "Export a Chart in Chartjs using React"
import { Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto"
import { CategoryScale } from "chart.js";

Chart.register(CategoryScale);
/*
// Create the chart
var myChart = new Chart(document.getElementById('chart').getContext('2d'), {
    type: 'horizontalBar',
    data: {
        labels: ['One', 'Two', 'Three', 'Four', 'Five', 'Six'],
        datasets: [
            {
            label: 'My data',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            },
        ],
    },
});


// Get the chart's base64 image string
var image = myChart.toBase64Image();

const data2 = {
    labels: ["A", "B", "C", "D"],
    datasets: [
        {
            label: "test",
            data: [1,2,3,4],
            backgroundColor: ["#ccc", "#ccc", "#ccc", "#ccc"],

        }
    ]
}
*/




/*import '../node_modules/react-vis/dist/style.css'; // *** will this actually work...?
//import {XYPlot, XAxis, YAxis, VerticalBarSeries} from 'react-vis'
// https://uber.github.io/react-vis/documentation/welcome-to-react-vis
*/

// quickchart - https://github.com/typpo/quickchart-js
// nevermind
// https://www.npmjs.com/package/chartjs-to-image
/* const ChartJsImage = require('chartjs-to-image');

const myChart = new ChartJsImage();
myChart.setConfig({
    type: 'bar',
    data: { labels: ['Hello world', 'Foo bar'], datasets: [{ label: 'Foo', data: [1, 2] }] },
});
const buf = await myChart.toBinary();
*/

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

/*
// -is using a class here an issue?
// -how to produce chart for varied data.. need to produce a set
// of objects to put in the data series as necessary...
// -also layout of graphs / location on page
// -also how do we generate images of these graphs to put in 
class GraphicPage extends Component {
    render() {
        const data = [
            {x: 'checklist 1', y: 2},
        ]
    }
}
*/

// victory data
const command_completion = [
    {x: "Command 1", y: 50},
    {x: "Command 2", y: 75},
    {x: "Command 3", y: 89},
    {x: "Command 4", y: 100}
]

var c = [9, 10, 20, 10] // components
var total = c[0] + c[1] + c[2] + c[3]
const checklist_completion = [
    {x: "Completed", y: c[0]/total},
    {x: "Missing Document", y: c[1]/total},
    {x: "Awaiting Approval", y: c[2]/total},
    {x: "Incomplete", y: c[3]/total}
]
//const h = 500 // height
//const w = 300 // width
//https://quickchart.io/documentation/chart-js/image-export/

var content = [] //command_completion

const barContent = () => {
    if(content.length == 0) {
        return (
            <h3> Error: No checklist data available in system to display for this command. </h3>
            
        )
    } else {
        return (
            <VictoryBar height={400} width={500} data={command_completion}
            containerComponent={<VictoryContainer responsive={false}/>}
            />
        )
    }
}

var content2 = [] //checklist_completion
const pieContent = () => {
    if(content2.length == 0) {
        return (
            <h3> Error: No data available in system to display for this checklist. </h3>
            
        )
    } else {
        return (
            <VictoryPie height={600} width={600} padding={200} data={checklist_completion}
            containerComponent={<VictoryContainer responsive={false}/>}
            colorScale="warm"/>

        )
    }
}


export function Graphic() {
    

    return (
        <>
        <Box sx={{ flexGrow: 1, padding: 2 }}>
            <Grid container spacing={0}>
                <Grid l>

                </Grid>
                <Grid xs>
                    <Item>
                        {/*console.log(image)*/}
                        {/*<barContent/>*/}
                        {barContent()}
                    </Item>
                    <Item>
                        {/*<pieContent/>*/}
                        {pieContent()}
                    </Item>
                </Grid>
            </Grid>
        </Box>
        </>
        
    )
}

export default Graphic;