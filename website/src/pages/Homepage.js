import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import MainIntroduction from './MainIntroduction';
import GridItems from './GridItems';
import Typography from '@material-ui/core/Typography';
import { MenuButton } from '../Navbar/MenuButton';


const useStyles = makeStyles((theme) => ({

    mainIntro: {
        textAlign: "left",
        padding: 6,
        // marginTop: 50
    },
    introSection: {
        fontFamily: "Helvetica"
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
        marginLeft: '50px'
    },

    myImage: {
        marginLeft: '50px',
        marginTop: '50px'

    }


}));



export default function Homepage() {
    const myStyles = useStyles();

    const downloadMyCV = () => {
        window.location.href = "C:\Users\USER\Desktop\react\website\src\Brian LuvongaCV.pdf";
    }
    return (



        <Grid container spacing={3}>


            <Grid item sm={12} xs={12} lg={6} className={myStyles.mainGridItem}>
                <Typography className={myStyles.introSection} variant="h3" component="h2" >
                    Software Developer
                </Typography>

                <Typography className={myStyles.introQuote}>

                    Am a Software Developer with 2 years experience. My specialization ranges from websites to mobile applications.

                </Typography>
                <MenuButton onClick={downloadMyCV}>
                    <a href={require("../Brian LuvongaCV.pdf")} download="myFile">CV</a>
                </MenuButton>

            </Grid>
            <Grid item sm={12} xs={12} lg={3} className={myStyles.myImage}>
                <img src={require('../me.jpg')} width="90%" height="100%" />

            </Grid>


        </Grid>

    );
}