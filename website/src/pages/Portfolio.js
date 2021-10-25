
import React from 'react';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import GridItems from './GridItems';
import '../App.css';



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
    port1: {
        textAlign: "center",
        height: "100%",
        cursor: 'pointer',
        backgroundColor: "black",
        color: "yellow",
        padding: 6


    },
    blogLink: {
        fontSize: "30px",
        textDecoration: 'none',
        color: "black",
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

                {/* <img src={require('../assets/blog.jpg')} width="90%" height="100%" /> */}
                <Typography>
                    <a class="blog" href="https://4luvongabrianmuyekho.wordpress.com/">Blog</a>
                </Typography>


            </Grid>
            <Grid item sm={6} xs={12} className={myStyles.port2}>


            </Grid>
            <Grid item sm={6} xs={12} lg={3}>


            </Grid>
            <Grid item sm={6} xs={12} lg={12}>

            </Grid>


        </Grid>


    );
}