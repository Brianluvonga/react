
import React from 'react';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    mainContainer: {
        height: 500,
        backgroundColor: "lightblue",
        color: "black",
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
    },
    readMore: {
        backgroundColor: "#09D2F1",
        // color: "#09D2F1",
        borderRadius: '30px 30px'
    },
    myImage:{
        padding: 50
        
    }
    

}));



export default function Interests() {
    const myStyles = useStyles();
    return (
        <Grid container spacing={3} className={myStyles.mainContainer}>

            <Grid item sm={12} xs={12} lg={6} className={myStyles.myImage}>
                <img src={require('../AI.jpg')} width="90%" height="100%" />

            </Grid>
            <Grid item item sm={12} xs={12} lg={6} className={myStyles.mainGridItem}>
                <Typography className={myStyles.introSection} variant="h4" component="h2" >
                    Artificial Intelligence
                </Typography>

                <Typography className={myStyles.introQuote}>
                    Advancements in technology has really seen a tremendous growth in AI, from Autonomous Cars, Space Exploration, DPAs to Drones.
                    It is prudent that we equip ourselves with this techology and its inner workings.


                </Typography>
                <Button className={myStyles.readMore} variant="contained" style={{ maxWidth: '30px', maxHeight: '30px', minWidth: '150px', minHeight: '30px', textAlign: 'center', color: 'black', padding: 5 }}>Read More</Button>

                <CardMedia />
            </Grid>




        </Grid>


    );
}