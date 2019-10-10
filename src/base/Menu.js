import React, { PureComponent } from 'react';
import {
    Navbar,
    Row,
    Col,
    MenuItem,
    Nav,
    NavItem,
    NavDropdown,
} from 'react-bootstrap';
import { onSelect } from '../utils/MenuUtil';
import './style.css';

class Menu extends PureComponent {
    onSelectClick = key => onSelect(key, this.props.history);

    render() {
        return (
            <>
                <Navbar fixedTop collapseOnSelect fluid>
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
                                <Nav>
                                    <NavItem eventKey={1} href="#">
                                        Link
                                    </NavItem>
                                    <NavItem eventKey={2} href="#">
                                        Link
                                    </NavItem>
                                    <NavDropdown
                                        eventKey={3}
                                        title="Dropdown"
                                        id="basic-nav-dropdown"
                                    >
                                        <MenuItem eventKey={3.1}>
                                            Action
                                        </MenuItem>
                                        <MenuItem eventKey={3.2}>
                                            Another action
                                        </MenuItem>
                                        <MenuItem eventKey={3.3}>
                                            Something else here
                                        </MenuItem>
                                        <MenuItem divider />
                                        <MenuItem eventKey={3.3}>
                                            Separated link
                                        </MenuItem>
                                    </NavDropdown>
                                </Nav>
                                <Nav pullRight>
                                    <NavItem eventKey={1} href="#">
                                        Link Right
                                    </NavItem>
                                    <NavItem eventKey={2} href="#">
                                        Link Right
                                    </NavItem>
                                </Nav>
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
