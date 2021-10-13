
import React from 'react';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import GridItems from './GridItems';


import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    mainContainer: {
        height: 400,
        backgroundColor: "black",
        color: "white",
        marginTop: 20
        

    },
    introSection: {
        color: "yellow",
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

  

}));



export default function MainIntroduction() {
    const myStyles = useStyles();
    return (

        <Grid container spacing={3} >
         
            <Grid item sm={6} xs={12} lg={3} className={myStyles.port1} >
                <GridItems title="Web Development" subheader="Full Stack Web Developer" description="Skills in php,mysql,html,css and bootstrap.
                    Web frameworks include; react,django and flask" />
                    
            </Grid>
            <Grid item sm={6} xs={12} className={myStyles.port2}>
                <GridItems title="App Development" subheader="Cross Platform Frameworks" description="From simple to complex mobile applications, 
                proficient skills in flutter, react native and android studio"/>

            </Grid>
            <Grid item sm={6} xs={12} lg={3}>
                <GridItems className={myStyles.port3} title="Web Development" subheader="Full Stack Web Developer" description="Skills in php,mysql,html,css and bootstrap.
                    Web frameworks include; react,django and flask" />
                    
            </Grid>
            <Grid item sm={6} xs={12} lg={12}>
                <GridItems title="App Development" subheader="Cross Platform Frameworks" description="From simple to complex mobile applications, 
                proficient skills in flutter, react native and android studio"/>

            </Grid>
         

        </Grid>


    );
}