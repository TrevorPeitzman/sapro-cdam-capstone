import React from 'react';
import { Buffer } from 'buffer';
//import ReactDOM from 'react-dom'; // supposedly needed for client-side generation
import ReactPDF, { PDFDownloadLink, Document, Image, Page, Text, View, StyleSheet, Svg, Rect, G, Polyline, Circle} from '@react-pdf/renderer';
import { Grid, Box, Paper, Button, Snackbar, Alert, Menu, MenuItem, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { VictoryBar, VictoryPie }  from 'victory'
//import ExportChart from "../utils/ExportChart";
//import {create, useState } from 'react';
//import { useScreenshot } from 'use-react-screenshot';
import arc from '../d3pielib/arc.js';



/*
// Data for the victory charts
const data = [
    {x: 1, y: 4000},
    {x: 2, y: 5000},
    {x: 3, y: 6000},
    {x: 4, y: 7000}
]
*/
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
function Gp_bar(props) {
    var bc = props.barcolor
    return (
        <Svg>
            <Gp_barframe />
            <Gp_baritem x="20" y="280" f={bc} h="20" />
            <Gp_baritem x="70" y="280" f={bc} h="50" />
            <Gp_baritem x="120" y="280" f={bc} h="50" />
            <Gp_baritem x="170" y="280" f={bc} h="50" />
        </Svg>
    )
};


function Gp_pie(props) {
    //var color = props.color

    return (
        <Svg ></Svg>
    )

}

const a = arc();
var testarc = a({
    innerRadius: 0,
    outerRadius: 100,
    startAngle: 0,
    endAngle: Math.PI / 2
});



/******************************************************************************************
 ************************************ GENERATE REPORT *************************************
 ******************************************************************************************
 */

export function GenerateReport() {

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

    function Testobject() {
        return (<Svg> 
            <Polyline
        points="0,0 0,300 400,300" 
        stroke="black"
        strokeWidth={4}
        />
      </Svg>
        );
    }

   
    const Report = () => (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    {/*SAPRO logo should be in top right hand corner*/}
                    <Text> SAPRO CDAM </Text>
                    
                    <Gp_bar barcolor="blue" /> 
                    <Text> {testarc} </Text>
    

                    <Text> End of Report </Text>
                </View>
            </Page>
        </Document>
    );

    //https://react-pdf.org/repl?example=rect
    //style={{width:400, height:400}}
    const barg = () => (
        <Svg viewbox="0 0 220 100">

            
        </Svg>
    )

    
    
    
    async function render() {
        //ReactPDF.renderToStream(<Report />);
        //ReactDOM.render(<Report />, document.getElementById('root'));
        //stream.on('finish', function() {
        //    iframe.src = stream.toBlobURL('application/pdf');
        // });

    };

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







/*=========================================================================================
 ==========================================================================================
 ************************************** OTHER STUFF ***************************************
 ==========================================================================================
 ==========================================================================================
 */

/*
    <Image
        src={ExportChart}
    />
    
    <VictoryBar /> <VictoryPie />
*/


 /*
 const llink = () => (
    <div>
        <PDFDownloadLink document={<Report />} fileName="report.pdf">
            {({blob, url, loading, error}) =>
                loading ? 'loading document...' : 'Download now!'
            }
        </PDFDownloadLink>
    </div>
);
*/

/*
    const styles2 = StyleSheet.create({
        body: {
            paddingTop: 35,
            paddingBottom: 65,
            paddingHorizontal: 35,
        },
        title: {
            fontSize: 24,
            textAlign: 'center',
            fontFamily: 'Oswald'
        },
        author: {
            fontSize: 12,
            textAlign: 'center',
            marginBottom: 40,
        },
        subtitle: {
            fontSize: 18,
            margin: 12,
            fontFamily: 'Oswald'
        },
        text: {
            margin: 12,
            fontSize: 14,
            textAlign: 'justify',
            fontFamily: 'Times-Roman'
        },
        image: {
            marginVertical: 15,
            marginHorizontal: 100,
        },
        header: {
            fontSize: 12,
            marginBottom: 20,
            textAlign: 'center',
            color: 'grey',
        },
        pageNumber: {
            position: 'absolute',
            fontSize: 12,
            bottom: 30,
            left: 0,
            right: 0,
            textAlign: 'center',
            color: 'grey',
        },
    });
    */
