import React, { PureComponent } from 'react';

import HomeView from './HomeView';

class HomeContainer extends PureComponent {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return <HomeView {...this.props} />;
    }
}

export default HomeContainer;
