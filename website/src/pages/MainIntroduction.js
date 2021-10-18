
import React from 'react';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { MenuButton } from '../Navbar/MenuButton';


import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    mainContainer: {
        height: 400,
        // backgroundColor: "black",
        color: "black",
        padding: 5

    },
    introSection: {
        color: "black",
        padding: 5,
        fontSize:40

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



export default function MainIntroduction() {
    const myStyles = useStyles();
    return (

        <Grid container className={myStyles.mainContainer}>
            <Grid item md={6} className={myStyles.mainGridItem}>
                <Typography className={myStyles.introSection} variant="h4" component="h2" >
                    Software Developer
                </Typography>

                <Typography className={myStyles.introQuote}>

                    Am a Software Developer with 2 years experience. My specialization ranges from websites to mobile applications

                </Typography>
                <MenuButton>CV</MenuButton>
                <CardMedia />
            </Grid>
         

        </Grid>


    );
}