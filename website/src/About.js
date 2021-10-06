import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
import GridItems from './GridItems';
import ArrowForward from '@material-ui/icons/ArrowForward';




const useStyles = makeStyles((theme) => ({

    mainIntro: {
        // textAlign:'left',
        justifyContent: 'center',
        padding: 6,
    },
    aboutMe: {
        padding: 16,

    }


}));



export default function About() {
    const myStyles = useStyles();
    return (
        <Grid container spacing={3} className={myStyles.aboutMe}>
            <Grid item lg={6} sm={12} xs={12} className={myStyles.mainIntro} >

                <GridItems title="About Me" subheader="Few Details About Me" description="Brian Luvonga is my name,
                am a Software Developer by profession having completed my higher education with specialization in Information Technology. 
                Technology has always fascinated me, 
                more so software which has ensured that the hardest tasks to achieve are solved by a piece of code. 
                With the knowledge I have garnered so far in respect to software development, am sure that I will achieve more in software development. "/>

            </Grid>


        </Grid>


    );
}