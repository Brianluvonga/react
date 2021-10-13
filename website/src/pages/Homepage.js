import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
import MainIntroduction from './MainIntroduction';
import GridItems from './GridItems';



const useStyles = makeStyles((theme) => ({

    mainIntro: {
        textAlign: "left",
        padding: 6,
        // marginTop: 50
    },
    webDev:{
        backgroundColor: "black",
    }
    

}));



export default function Homepage() {
    const myStyles = useStyles();
    return (
 
        <Grid container spacing={3}>
            <Grid item lg={12} sm={12} xs={12} className={myStyles.mainIntro}>
                <MainIntroduction />
            </Grid>
{/* 
            <Grid item sm={6} xs={12} lg={3}>
                <GridItems className={myStyles.webDev} title="Web Development" subheader="Full Stack Web Developer" description="Skills in php,mysql,html,css and bootstrap.
                    Web frameworks include; react,django and flask" />
                    
            </Grid>
            <Grid item sm={6} xs={12} lg={3}>
                <GridItems title="App Development" subheader="Cross Platform Frameworks" description="From simple to complex mobile applications, 
                proficient skills in flutter, react native and android studio"/>

            </Grid>
            <Grid item sm={6} xs={12} lg={3}>
                <GridItems title="Data Analysis" subheader="Python, R and PowerBI" description="Analyse your data and make proper decisions about
                 your business process and make Informed decisions."/>

            </Grid>
            <Grid item sm={6} xs={12} lg={3}>
                <GridItems title="Tutoring" subheader="Knowledge Sharing" description="I do love teaching technology related subjects from basic computing to software development"/>

            </Grid> */}

        </Grid>
    );
}