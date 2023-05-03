import React, { useState, useEffect, Component } from 'react'; // { useState } ??? 
import ReactDOM from 'react-dom';
import { Storage } from 'aws-amplify';
import { styled } from '@mui/material/styles';
import { Grid, Box, Paper, Button, Snackbar, Alert, Menu, MenuItem, Typography } from '@mui/material';
// https://formidable.com/open-source/victory/
import { VictoryChart, VictoryContainer, VictoryBar, VictoryPie, VictoryLabel}  from 'victory'
// https://www.youtube.com/watch?v=KuWLhLFfeRc Youtube - user 'Arslan' - "Export a Chart in Chartjs using React"
import { DataStore } from '@aws-amplify/datastore';
import { Checklist, ChecklistItem } from '../models';




const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));





export function Graphic() {

    const [command_completion, setCommands] = useState([])
    //const [allData, setData ] = useState([)
    //const [ready, setReady] = useState([])
    useEffect(() => {
        getData()
        //setReady(true)
    }, [])

    async function getData() {
        const model = await DataStore.query(Checklist)
        var res = []
        model.forEach(m => {
            var o = new Object
            o.x = m.commandName
            o.y = m.percentCompletion
            res.push(o)
        }
        )
       
        setCommands(res)
        //res = model.map((x) =>
        //    x.percentCompletion
        //)
        //setData(model)
    }

    // victory data
    // const command_completion = [
    //     {x: "Command 1", y: 50},
    //     {x: "Command 2", y: 75},
    //     {x: "Command 3", y: 89},
    //     {x: "Command 4", y: 100}
    // ]

    var c = [9, 10, 20, 10] // components
    var total = c[0] + c[1] + c[2] + c[3]
    const checklist_completion = [
        {x: "Completed", y: c[0]/total},
        {x: "Missing Document", y: c[1]/total},
        {x: "Awaiting Approval", y: c[2]/total},
        {x: "Incomplete", y: c[3]/total}
    ]

    var content = [] //command_completion

    const barContent = () => {
        if(command_completion.length == 0) {
            return (
                <h3> Error: No checklist data available in system to display for this command. </h3>
                
            )
        } else {
            return (
                <VictoryChart height={600} width={2400}>
                <VictoryBar dx={50} height={600} width={2400} data={command_completion}
                containerComponent={<VictoryContainer responsive={false}/>}
                labels={({datum}) => datum.x}
                labelComponent={<VictoryLabel angle={-90} />}
                />
                </VictoryChart>
            )
        }
    }

    var content2 = []//checklist_completion //checklist_completion
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
                    {/* <Item>
                        {/*<pieContent/>}
                        {pieContent()}
                    </Item>
                    */}
                </Grid>
            </Grid>
        </Box>
        </>
        
    )
}

export default Graphic;