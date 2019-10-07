import React, { PureComponent } from 'react';

import { Grid } from 'react-bootstrap';

import Menu from './Menu';

class Index extends PureComponent {
    render() {
        return (
            <>
                <Menu {...this.props} />
                <Grid fluid>{this.props.children}</Grid>
            </>
        );
    }
}

export default Index;
