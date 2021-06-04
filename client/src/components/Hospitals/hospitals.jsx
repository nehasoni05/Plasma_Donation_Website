import React, { useState, useEffect } from "react";
import Data from "./hospital.json";
import { Card, CardContent, Typography, makeStyles  } from '@material-ui/core/';


const useStyles = makeStyles((theme) => ({
    border: {
    border: 'solid',
    },
    fullHeightCard: {
    height: '100%',
    },
    card: {
        
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '10px',
    height: '100%',
    position: 'relative',
    margin: 10,
    backgroundColor: '#b3e5fc'
    },
    

    title: {
    padding: '0 16px',
    fontSize:25,
    color:'black',
    fontWeight: 'bold',
    textAlign: 'left'
    },
    content:{
        padding: '0 16px',
        fontSize:20,
        color:'black',
        textAlign: 'left'

    },
    textbox:{
        width: '70%',
        height: '56px',
        borderRadius: '4px',
        position: 'relative',
        backgroundColor: 'rgba(255,255,255,0.3)',
        margin: '10px',
        transition: '0.3s all',
        marginLeft: '40px', 
        fontSize:'40px',
        fontWeight:'bold'

    }
}));

function Hospital() {
    const classes = useStyles();
    const [allData,setAllData] = useState([]);
    const [filteredData,setFilteredData] = useState(allData);

    useEffect(() => {
        setAllData(Data);
        setFilteredData(Data);
    },[]);

    function handleSearch(event)
    {
        let value = event.target.value.toUpperCase();
        let result = [];
        console.log(value);
        result = allData.filter((data) => {
        // eslint-disable-next-line eqeqeq
        return data.name.toUpperCase().search(value) != -1;
        });
        setFilteredData(result);
    }
    return (
        <>
        <div className="App">
        <div style={{ margin: '0 auto' }}>

        <input 
        type="text"
        placeholder="Enter hospital name"
        className={classes.textbox}
        onChange={(event) =>handleSearch(event)} />
        </div>
        </div>
        {
            (filteredData.length>0)?
        filteredData.map (hospital => { 
            return (
            <Card className={classes.card}>
            <CardContent>
              <Typography className={classes.title} gutterBottom variant="h5" component="h2">{hospital.name.toUpperCase()}</Typography>
              <Typography variant="body2" className={classes.content} color="textSecondary" component="p">Type : {hospital.type}</Typography>
              <Typography variant="body2" className={classes.content} color="textSecondary" component="p">Address : {hospital.address}</Typography>
              <Typography variant="body2" className={classes.content} color="textSecondary" component="p">City : Delhi</Typography>
              <Typography variant="body2" className={classes.content} color="textSecondary" component="p"></Typography>
              <Typography variant="body2" className={classes.content} color="textSecondary" component="p">Contact Number : {hospital.contact_numbers[0]}  </Typography>
              <Typography variant="body2" className={classes.content} color="textSecondary" component="p">Location : <a href={hospital.location} target='_blank' rel="noreferrer">Check hospital location </a>  </Typography>
            </CardContent>
          </Card>
        )})
        : 
        <Card className={classes.card}>
            <CardContent>
              <Typography className={classes.title} gutterBottom variant="h5" component="h2">NO DATA AVAILABLE</Typography>
            </CardContent>
        </Card>
    }
        </>
    ) 
}

export default Hospital;