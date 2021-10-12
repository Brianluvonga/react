import React from 'react';
// import Grid from '@material-ui/core/Grid';
// import { makeStyles } from '@material-ui/core/styles';
import { Nav, NavLink, Bars, NavMenu, CvBtn, CvBtnLink } from './NavbarComponents';


// const useStyles = makeStyles((theme) => ({

//     mainIntro: {
//         textAlign: "left",
//         // padding: 6
//         marginTop: 50

//     },
//     webDev: {
//         backgroundColor: "black",
//     }


// }));



export default function Navigation() {
    // const myStyles = useStyles();
    return (

        <Nav>
            <NavLink to="/contacts">
                <h3>Brian Luvonga</h3>
            </NavLink>
            <Bars />

            <NavMenu>
                <NavLink to="/home" activeStyle>
                    Home
                </NavLink>
                <NavLink to="/about" activeStyle>
                    About
                </NavLink>
                <NavLink to="/services" activeStyle>
                    Services
                </NavLink>
                <NavLink to="/contacts" activeStyle>
                    Contacts
                </NavLink>
            </NavMenu>

            <CvBtn>
                <CvBtnLink to="/cv" activeStyle>CV</CvBtnLink>
            </CvBtn>

        </Nav>


    );
}