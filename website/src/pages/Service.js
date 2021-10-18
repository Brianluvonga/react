import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
// import MainIntroduction from './MainIntroduction';
import IconButton from '@material-ui/core/IconButton';
import GridItems from './GridItems';
import { CardActions, CardHeader, CardContent, CardMedia } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({

    mainIntro: {
        textAlign: "left",
        padding: 6,

    },
    webDev: {
        backgroundColor: "black",
    },
    section: {
        marginTop: '80px'

    }

}));



export default function Service() {
    const myStyles = useStyles();
    return (

        <Grid container spacing={3} className={myStyles.section}>


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
                <GridItems title="Tutoring" subheader="Knowledge Sharing" description="I do love teaching technology related subjects from basic computing to software development" />

            </Grid>

        </Grid>
    );
}