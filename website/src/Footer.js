import React from 'react';
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from './footerStyles'
import { makeStyles } from '@material-ui/core/styles';




const useStyles = makeStyles((theme) => ({
    footerSection: {
        fontSize: '23',
        backgroundColor: "black",
        color: 'white'
    },
    footerPortfolio: {
        fontSize: 22,


    }

}));



export default function Footer() {
    const myStyles = useStyles();
    return (

        <Box>

            <Container>
                <Row>
                    <Column>
                        <Heading>Portfolio</Heading>
                        <FooterLink href="https://github.com/Brianluvonga"  target="_blank">GitHub</FooterLink>
                        {/* <FooterLink href="#">StackOverFlow</FooterLink> */}
                        <FooterLink href="https://www.linkedin.com/in/brian-luvonga-89262b18a/" target="_blank">LinkedIn</FooterLink>
                        <FooterLink href="https://4luvongabrianmuyekho.wordpress.com/" target="_blank">Blog</FooterLink>

                    </Column>
                    <Column>
                        <Heading>My Services</Heading>
                        <FooterLink href="" >Web Development</FooterLink>
                        <FooterLink href="">App Development</FooterLink>
                        <FooterLink href="">Tutoring</FooterLink>
                        <FooterLink href="">Data Analysis</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Contacts</Heading>
                        <FooterLink href="#">

                            brnluvonga@gmail.com

                        </FooterLink>
                        <FooterLink href="#">

                            0798210403

                        </FooterLink>
                        <FooterLink href="#">

                            Eldoret, Kenya

                        </FooterLink>

                    </Column>
                    <Column>
                        <Heading>Follow Me</Heading>
                        {/* <FooterLink href="#">
                            <i className="fab fa-facebook-f">
                                <span style={{ marginLeft: "10px" }}>
                                    Facebook
                                </span>
                            </i>
                        </FooterLink>
                        
                        <FooterLink href="#">
                            <i className="fab fa-twitter">
                                <span style={{ marginLeft: "10px" }}>
                                    Twitter
                                </span>
                            </i>
                        </FooterLink> */}
                        <FooterLink href="https://www.linkedin.com/in/brian-luvonga-89262b18a/" target='_blank'>
                            <i className="fab fa-linkedin">
                                <span style={{ marginLeft: "10px" }}>
                                    linkedIn
                                </span>
                            </i>
                        </FooterLink>
                    </Column>
                </Row>
            </Container>
        </Box>
    );
}
