
import React, { Component } from 'react';
import { NavigationItems } from './Navbar/NavigationItems';
import './components/Navbar.css';
import { Link, animateScroll as scroll } from "react-scroll";

class Navigation extends Component {


    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    }

    render() {
        return (
            <nav className="NavbarItems">
                <h2 className="navLogo">Brian Luvonga</h2>

                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>

                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>

                    {NavigationItems.map((item, index) => {
                        return (
                            <Link>
                                <a className={item.cName} href={item.url}>
                                    {item.header}
                                </a>
                            </Link>
                        )
                    })}


                </ul>
            </nav>
        )
    }


}


export default Navigation;