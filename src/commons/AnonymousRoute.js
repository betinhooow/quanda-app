import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { isLogged } from '../utils/SecurityUtil';

const AnonymousRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props => {
            if (!isLogged()) {
                return <Component {...props} />;
            }
            return (
                <Redirect
                    to={{
                        pathname: '/',
                        state: { from: props.location },
                    }}
                />
            );
        }}
    />
);

export default AnonymousRoute;
