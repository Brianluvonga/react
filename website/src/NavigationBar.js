import React from 'react';
// import AppBar from '@material-ui/core/AppBar';
import { Toolbar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';



const useStyles = makeStyles((theme) => ({
    menuBox: {
        display: 'flex',
        flexdirection: 'column',
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
        }
    },
    titleName: {
        fontSize: 25,
        color: 'black',
        letterSpacing: 1.5,
        fontWeight: 'bold',

    },

    toolbar: {
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'space-between'
        }
    },

    menuItem: {
        padding: theme.spacing(0.5),
        [theme.breakpoints.up('md')]: {
            paddingLeft: theme.spacing(10)
        },
        color: "black"
    }


}));



export default function NavigationBar() {
    const myStyles = useStyles();
    return (

        <Container>
            <Toolbar className={myStyles.toolbar}>
                <Typography variant="h4" className={myStyles.titleName}>
                    Brian Luvonga
                </Typography>

                <Box className={myStyles.menuBox}>
                    {['Home', 'About', 'Services', 'Contact'].map((menuItem) => (
                        <Link component="button" variant="body1" className={myStyles.menuItem}>
                            {menuItem.toUpperCase()}
                        </Link>
                    ))}
                </Box>
            </Toolbar>
        </Container>

      

    );
}