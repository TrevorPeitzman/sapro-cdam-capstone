import React from 'react';
import ReactDOM from 'react-dom';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';


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
    
    const Report = () => (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text> Start of Report </Text>
                </View>
            </Page>
        </Document>
    )

    const DownloadLink = () => (
        <div>
            <PDFDownloadLink document={<Report />} fileName="report.pdf">
                {({blob, url, loading, error}) =>
                    loading ? 'loading document...' : 'Download now!'
                }
            </PDFDownloadLink>
        </div>
    )
    
    return (
        //<h1>This is the Generate Report page</h1>
        <>
            <Box sx={{ flexGrow: 1, padding: 2 }}>
                
                <Grid container spacing={0}>
                    <Grid xs={8}>
                        <Item>
                            <Button onClick={DownloadLink}>Generate Report</Button>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default GenerateReport;