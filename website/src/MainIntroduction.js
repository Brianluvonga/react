
import React from 'react';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    mainContainer: {
        height: 300,
        backgroundColor: "black",
        color: "white",
        padding: 5

    },
    introSection: {
        color: "yellow",
        padding: 15

    },
   

    mainGridItem: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: theme.spacing(6)
    },
    introQuote:{
        padding:5
    }

}));



export default function MainIntroduction() {
    const myStyles = useStyles();
    return (

        <Grid container className={myStyles.mainContainer}>
            <Grid item md={6} className={myStyles.mainGridItem}>
                <Typography className={myStyles.introSection} variant="h4" component="h2" >
                    Software Developer
                </Typography>

                <Typography className={myStyles.introQuote}>
                    Let me help you build something for your business, this may include a simple website to a complex website
                    or a mobile application to soot your needs.

                    {/* <img src={require('./me.jpg')} width="300" height="400" /> */}

                </Typography>
                <Button variant="contained" style={{ maxWidth: '30px', maxHeight: '30px', minWidth: '150px', minHeight: '30px' }}>CV</Button>

                <CardMedia />
            </Grid>

        </Grid>

    );
}