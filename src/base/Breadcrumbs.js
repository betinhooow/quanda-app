import React, { PureComponent } from 'react';

import { Grid } from 'react-bootstrap';

class Index extends PureComponent {
    render() {
        return (
            <Grid>
                <ol className="breadcrumb">
                    <li>
                        <a href="./">Home</a>
                    </li>
                    <li>
                        <a href="./">Library</a>
                    </li>
                    <li className="active">Data</li>
                </ol>
            </Grid>
        );
    }
}

export default Index;
