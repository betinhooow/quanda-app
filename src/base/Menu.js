import React, { PureComponent } from 'react';
import { Navbar } from 'react-bootstrap';
import { onSelect } from '../utils/MenuUtil';

class Menu extends PureComponent {
    onSelectClick = key => onSelect(key, this.props.history);

    render() {
        return (
            <>
                <Navbar fixedTop collapseOnSelect fluid>
                    <Navbar.Header>
                        <Navbar.Brand></Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                </Navbar>
            </>
        );
    }
}

export default Menu;
