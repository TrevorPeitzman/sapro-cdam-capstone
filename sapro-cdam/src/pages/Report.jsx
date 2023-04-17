import React from 'react';
import { Buffer } from 'buffer';
//import ReactDOM from 'react-dom'; // supposedly needed for client-side generation
import ReactPDF, { PDFDownloadLink, Document, Image, Page, Text, View, StyleSheet, Svg, Rect, G, Polyline, Circle, Path} from '@react-pdf/renderer';
import { Grid, Box, Paper, Button, Snackbar, Alert, Menu, MenuItem, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { VictoryBar, VictoryPie }  from 'victory'
//import ExportChart from "../utils/ExportChart";
//import {create, useState } from 'react';
//import { useScreenshot } from 'use-react-screenshot';
//import arc from '../d3pielib/arc.js';
//import pie from '../d3pielib/pie.js';
import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

/******************************************************************************************
 ************************************ CHART COMPONENTS ************************************
 ******************************************************************************************
 */



function Gp_baritem(props) {
    var w = 40 //w.toString() ** don't actually need toString I guess
    var h = props.h
    var x = eval(props.x) + w/2
    var y = props.y - eval(h)

    return <Rect width={w} height={h} fill={props.f} x={x} y={y} />;
}

/** props:
 * s (float) - scale ratio, default = 1
 * color (string) - frame color. default = "black"
 */
function Gp_barframe(props) {
    var s = props.s || 1
    var p = `10,10 10,${300*s} ${400*s},${300*s}`

    return (
        <Polyline
          points={p}//"0,0 0,300 400,300" 
          stroke={props.color || "black"}//"black"
          strokeWidth={4*s}
        />
    )
}

//xtitle, ytitle, gtitle, data
//s={1} color="black"

/** props:
 * xtitle (string) - x-axis title, default = ""
 * ytitle (string) - y-axis title, default = ""
 * gtitle (string) - graph title, default = ""
 * data (some kind of list) graph data, requuired 
 */
// !!! -----TODO------ !!!
// add gridlines and y-axis values
// add title
function Gp_bar(props) {
    var bc = props.barcolor || "black" 
    

    const legend_spacing = 20
    const legend_x = 350
    
    var bdata = bar_data()
    var bars = bdata.map((data, index) =>
        <Gp_baritem x={20+(index*50)} y="280" f={next_color(index)} h={data} />
    )

    // legend components
    const legend_items = bdata.map((data, index) => 
        <Rect fill = {next_color(index, 2)}
            x = {30+legend_x} //"30" 
            y = {(index+1)*legend_spacing}
            width = "10"
            height = "10"
        />
    )
    const legend_text = bar_labels().map((label, index) =>
        <Text x={50+legend_x} y = {10+(index+1)*legend_spacing} style={{fontSize:10}}> 
            {label} 
        </Text>
    )

    
    return (
        <Svg width="500" height="400">
            <Gp_barframe />
            {bars}
            {legend_items}
            {legend_text}
        </Svg>
    )
};
/*
<Gp_baritem x="20" y="280" f={bc} h="20" />
<Gp_baritem x="70" y="280" f={bc} h="50" />
<Gp_baritem x="120" y="280" f={bc} h="50" />
<Gp_baritem x="170" y="280" f={bc} h="50" />
*/

function bar_data() {
    const data_var = [10,60,70,80,90]
    return data_var
}
function bar_labels() {
    const labels_var = 
    ["Command 1", 
    "Command 2", 
    "Command 3", 
    "Command 4", 
    "Command 5"]

    return labels_var
}

// ** THIS FUNCTION SHOULD ACTUALLY GET THE PIE DATA
function pie_data() {
    const pie_data_var = [1,6,7,8,9]
    return pie_data_var
}
function pie_labels() {
    const pie_labels_var = 
    ["Command 1", 
    "Command 2", 
    "Command 3", 
    "Command 4", 
    "Command 5"]

    return pie_labels_var
}

// provides a color for an element based on index
function next_color(i, seed=0) {
    const colors = ['blue', 'green', 'red', 'yellow', 'purple']
    return colors[(seed+i) % colors.length]
}

// !!! -----TODO------ !!!
// add title
function Gp_pie(props) {
    // props
    var x = props.x || 0
    var y = props.y || 0

    // - - - - - - - - - - - - - - - -
    // other constants
    // - - - - - - - - - - - - - - - -
    // set spacing value for components of legend
    const legend_spacing = 20
    const legend_x = 220
    // set translation value for the pie chart (used as part of 'transform' attribute)
    var tf = `translate(${120+x},${110+y})`
    
    // 
    var data = pie_data()
    const pg = d3.pie()(data);
    var baseArc = d3.arc()
    .innerRadius(0)
    .outerRadius(100)

    // get pathdata strings 
    var agg = []
    for(var i=0; i < pg.length; i++) {
        var a = baseArc
        a
        .startAngle(pg[i].startAngle)    
        .endAngle(pg[i].endAngle)
        agg.push(a())
    }
    // create array of <Path/> elements that make up the pie chart
    const sectors = agg.map((pathString, index) =>
        <Path fill = {next_color(index)}
            d = {pathString}
            //stroke="black"
            //strokeWidth="0"
        />,
    )

    // legend components
    const legend_items = agg.map((pathString, index) => 
        <Rect fill = {next_color(index)}
            x = {30+legend_x} //"30" 
            y = {(index+1)*legend_spacing}
            width = "10"
            height = "10"
        />
    )
    const legend_text = pie_labels().map((label, index) =>
        <Text x={50+legend_x} y = {10+(index+1)*legend_spacing} style={{fontSize:10}}> 
            {label} 
        </Text>
    )
    
    return (
        <Svg width="500" height="300">
            <G transform={tf}>
                {sectors}
            </G>
            {legend_items}
            {legend_text}
            
            
            {/*<G transform={tf}>
                {sectors}
            </G>*/}
        </Svg>
    )

}



/******************************************************************************************
 ************************************ GENERATE REPORT *************************************
 ******************************************************************************************
 */

export function GenerateReport() {

    // report styles
    const styles = StyleSheet.create({
        page: {
            flexDirection: 'row',
            backgroundColor: '#F3E9E0'
        },
        section: {
            margin: 10,
            padding: 10,
            flexGrow: 1
        }
    });

    const timestamp = Date(Date.now)
    // ***** this needs to pull from system!!!!
    const createdBy = "[username]" 
   
    const Report = () => (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    {/*SAPRO logo should be in top right hand corner*/}
                    <Text> SAPRO CDAM </Text>
                    <Text> {timestamp} </Text>
                    <Text> {"Created by" + createdBy} </Text>
                    <Gp_bar barcolor="blue" />
                    <Gp_pie/>
                        
                </View>
            </Page>
        </Document>
    );

    /* ############################################################################################
       !!!! DO NOT MODIFY THE RETURN VALUE HERE! REPORT CONTENTS ARE GIVEN IN "const Report()" !!!!
       ############################################################################################
    */
    return (
        //<h1>This is the Generate Report page</h1>
        // onClick=DownloadLink
        
        <>
            <Box sx={{ flexGrow: 1, padding: 2 }}>
                <Grid container spacing={0}>
                    <Grid xs={8}>
                        <Item>
                            <PDFDownloadLink document={<Report />} fileName="report.pdf">
                                {({blob, url, loading, error}) =>
                                    loading ? 'generating document...' : 'Download Report'
                                }
                            </PDFDownloadLink>
                        </Item> 
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default GenerateReport;