import React, { PureComponent } from 'react';
import { Navbar, Row, Col, Nav, NavItem } from 'react-bootstrap';
import './style.css';
import {
    faListAlt,
    faEdit,
    faUser,
    faBell,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { onSelect } from '../utils/MenuUtil';

const styleSheet = {
    iconMenu: { fontSize: 20 },
};

const menuItem = [
    { label: 'Home', icon: faListAlt, eventKey: '/' },
    { label: 'Answer', icon: faEdit, eventKey: 'answer' },
    { label: 'Spaces', icon: faUser, eventKey: 'spaces' },
    { label: 'Notifications', icon: faBell, eventKey: 'notifications' },
];

class Menu extends PureComponent {
    onSelectClick = key => onSelect(key, this.props.history);

    checkIsActiveRoute = (route, item) =>
        this.props.history.location.pathname === route
            ? `${item}_active`
            : `${item}_item`;

    iconAndTextMenu = () =>
        menuItem.map(item => (
            <NavItem
                eventKey={item.eventKey}
                className={this.checkIsActiveRoute(item.eventKey, 'navItem')}
            >
                <div className={this.checkIsActiveRoute(item.eventKey, 'item')}>
                    <FontAwesomeIcon
                        style={styleSheet.iconMenu}
                        icon={item.icon}
                        size="lg"
                    />
                    <span> {item.label} </span>
                </div>
            </NavItem>
        ));

    render() {
        return (
            <>
                <Navbar
                    fixedTop
                    collapseOnSelect
                    fluid
                    onSelect={this.onSelectClick}
                >
                    <Row>
                        <Col md={8} mdOffset={2}>
                            <Navbar.Header>
                                <Navbar.Brand
                                    className="header_logo"
                                    href="#home"
                                />
                                <Navbar.Toggle />
                            </Navbar.Header>
                            <Navbar.Collapse>
                                <Nav>{this.iconAndTextMenu()}</Nav>
                            </Navbar.Collapse>
                        </Col>
                        <Col md={2} />
                    </Row>
                </Navbar>
            </>
        );
    }
}

export default Menu;
