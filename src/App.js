import React, { PureComponent } from 'react';
import { BrowserRouter } from 'react-router-dom';

import $ from 'jquery';

import { routes } from './routes';

import AnonymousRoute from './commons/AnonymousRoute';
import ProtectedRoute from './commons/ProtectedRoute';

import 'bootstrap/dist/css/bootstrap.min.css';

window.jQuery = window.$ = $;
require('bootstrap');

class App extends PureComponent {
    render() {
        return (
            <BrowserRouter>
                <>
                    {!!routes &&
                        routes.map(route => {
                            if (route.type === 'protected') {
                                return (
                                    <ProtectedRoute
                                        key={route.path}
                                        mode={route.mode}
                                        exact={route.exact}
                                        path={route.path}
                                        component={route.component}
                                    />
                                );
                            }
                            return (
                                <AnonymousRoute
                                    key={route.path}
                                    mode={route.mode}
                                    exact={route.exact}
                                    path={route.path}
                                    component={route.component}
                                />
                            );
                        })}
                </>
            </BrowserRouter>
        );
    }
}

export default App;
