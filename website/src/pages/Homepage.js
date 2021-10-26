import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import MainIntroduction from './MainIntroduction';
import GridItems from './GridItems';
import Typography from '@material-ui/core/Typography';
import { MenuButton } from '../Navbar/MenuButton';
import '../App.css';



const useStyles = makeStyles((theme) => ({

    mainIntro: {
        textAlign: "left",
        padding: 6,
        // marginTop: 50
    },
    introSection: {
        fontFamily: "Helvetica",
        color: "orange"
    },
    introQuote: {
        padding: 6,

    },
    webDev: {
        backgroundColor: "black",
    },
    mainGridItem: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: theme.spacing(6),
        marginLeft: '120px'
    },

    myImage: {
        marginLeft: '50px',
        marginTop: '50px'

    },
    cv:{
        justifyContent: "center",
        padding: theme.spacing(1)
    }



}));



export default function Homepage() {
    const myStyles = useStyles();

    return (

        <Grid container spacing={3}>


            <Grid item sm={12} xs={12} lg={6} className={myStyles.mainGridItem}>
                <Typography className={myStyles.introSection} variant="h4" component="h2" >
                    Software Developer
                </Typography>

                <Typography className={myStyles.introQuote}>

                    Am a Software Developer with 2 years experience. My specialization ranges from websites to mobile applications.

                </Typography>
                <Typography  className={myStyles.cv}>
                    <div class="cvLink">
                        <a href={require("../Brian LuvongaCV.pdf")} download="myFile" >CV</a>
                    </div>
                </Typography>



            </Grid>
            <Grid item sm={12} xs={12} lg={3} className={myStyles.myImage}>
                <img src={require('../brian.png')} width="90%" height="100%" />

            </Grid>


        </Grid>

    );
}