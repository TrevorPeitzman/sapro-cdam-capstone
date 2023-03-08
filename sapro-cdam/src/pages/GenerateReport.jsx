import React from 'react';
import ReactDOM from 'react-dom'; // supposedly needed for client-side generation
import ReactPDF, { PDFDownloadLink, Document, Image, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { Grid, Box, Paper, Button, Snackbar, Alert, Menu, MenuItem, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { VictoryBar, VictoryPie }  from 'victory'
//import ExportChart from "../utils/ExportChart";
import {create, useState } from 'react';
//import { useScreenshot } from 'use-react-screenshot';


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

    /*
    <Image
        src={ExportChart}
    />
    
    <VictoryBar /> <VictoryPie />
    */

    
    const Report = () => (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text> Start of Report </Text>
                    
                    
                    <Text> End of Report </Text>
                    
                </View>
            </Page>
        </Document>
    );

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

    const llink = () => (
        <div>
            <PDFDownloadLink document={<Report />} fileName="report.pdf">
                {({blob, url, loading, error}) =>
                    loading ? 'loading document...' : 'Download now!'
                }
            </PDFDownloadLink>
        </div>
    );

    
    async function render() {
        //ReactPDF.renderToStream(<Report />);
        //ReactDOM.render(<Report />, document.getElementById('root'));
        //stream.on('finish', function() {
        //    iframe.src = stream.toBlobURL('application/pdf');
        // });

    };

    
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