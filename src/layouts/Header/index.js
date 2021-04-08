import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from 'reactstrap';

class Header extends Component {
    constructor() {
        super();
        this.state = {
            isNavOpen: false
        }
    }

    toggleNav = () => {
        this.setState(prev => ({
            isNavOpen: !prev.isNavOpen
        }))
    }

    render() {
        const { isNavOpen } = this.state;
        return (
            <header>
                <div className="container-header">
                    <Navbar color="#ef9a9a" light expand="md">
                        <NavbarBrand href="/" >Sulistiani &amp; Bayu Wedding</NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={isNavOpen} navbar>
                            <Nav className="mr-auto" navbar>
                                <NavItem > 
                                    <NavLink href="#">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#story">Cerita Kami</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#prewedding">Pre Wedding</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#wedding">Wedding</NavLink>
                                </NavItem>
                            </Nav>
                            <NavbarBrand>1 April 2021</NavbarBrand>
                        </Collapse>
                    </Navbar>
                </div>
            </header>
        );
    }
}

export default Header;