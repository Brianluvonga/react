
import React from 'react';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    mainContainer: {
        height: 300,
        backgroundColor: "#09D2F1",
        color: "white",
        padding: 5,
        marginTop: 20
    },
    introSection: {
        color: "black",
        // padding: 15

    },


    mainGridItem: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: theme.spacing(6)
    },
    introQuote: {
        padding: 5
    }

}));



export default function Interests() {
    const myStyles = useStyles();
    return (
        <Grid container className={myStyles.mainContainer}>
            <Grid item md={6} className={myStyles.mainGridItem}>
                <Typography className={myStyles.introSection} variant="h4" component="h2" >
                    Artificial Intelligence
                </Typography>

                <Typography className={myStyles.introQuote}>
                    Advancements in technology has really seen a tremendous growth in AI, from Autonomous Cars, Space Exploration, DPAs to Drones. 
                    It is prudent that we equip ourselves with this techology and its inner workings.

                    {/* <img src={require('./me.jpg')} width="300" height="400" /> */}

                </Typography>
                <Button variant="contained" style={{ maxWidth: '30px', maxHeight: '30px', minWidth: '150px', minHeight: '30px', textAlign: 'center' }}>Read More</Button>

                <CardMedia />
            </Grid>
         

        </Grid>


    );
}