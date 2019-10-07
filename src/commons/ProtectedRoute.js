import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Base from '../base';

const ProtectedRoute = ({ component: Component, mode, ...rest }) => (
    <Route
        {...rest}
        render={props => {
            if (true) {
                return (
                    <Base history={props.history}>
                        <Component mode={mode} {...props} />
                    </Base>
                );
            }
            return (
                <Redirect
                    to={{
                        pathname: '/auth/signin',
                        state: { from: props.location },
                    }}
                />
            );
        }}
    />
);

export default ProtectedRoute;
