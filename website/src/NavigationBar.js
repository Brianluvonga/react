import React from 'react';
// import AppBar from '@material-ui/core/AppBar';
// import { Toolbar } from '@material-ui/core';
// import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';



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
    },
    container: {
        color: 'white'
    }


}));



export default function NavigationBar() {
    const myStyles = useStyles();
    return (

        <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark" fixed="top">
            <Container className={myStyles.container}>
                <Navbar.Brand  className="mylogo" href="#home">Brian Luvonga</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="float-right"/>
                <Navbar.Collapse id="responsive-navbar-nav" className="float-right">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Home</Nav.Link>
                        <Nav.Link href="#pricing">About</Nav.Link>
                        <Nav.Link href="#pricing">Contact</Nav.Link>

                     
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">CV</Nav.Link>
                       
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        // <Container>
        //     <Toolbar className={myStyles.toolbar}>
        //         <Typography variant="h4" className={myStyles.titleName}>
        //             Brian Luvonga
        //         </Typography>

        //         <Box className={myStyles.menuBox}>
        //             {['Home', 'About', 'Services', 'Contact'].map((menuItem) => (
        //                 <Link component="button" variant="body1" className={myStyles.menuItem}>
        //                     {menuItem.toUpperCase()}
        //                 </Link>
        //             ))}
        //         </Box>
        //     </Toolbar>
        // </Container>



    );
}