import React, { PureComponent } from 'react';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import TagList from './TagList';

const tagsFollowing = [
    { name: 'Feed', path: '/' },
    {
        name: 'Psychology of Everyday Life',
        path: '/tag/psychology_of_everyday_life',
    },
    { name: 'Mobile Technology', path: '/tag/mobile_technology' },
    { name: 'English (language)', path: '/tag/english_language' },
    { name: 'Mathematics', path: '/tag/mathematics' },
    { name: 'Business', path: '/tag/business' },
    { name: 'Sports', path: '/tag/sports' },
    { name: 'Mental Health', path: '/tag/mental_health' },
    { name: 'Marketing', path: '/tag/marketing' },
    { name: 'Technology', path: '/tag/technology' },
    { name: 'Psychology', path: '/tag/psychology' },
    { name: 'Finance', path: '/tag/finance' },
    { name: 'Science', path: '/tag/science' },
    { name: 'Sessions', path: '/tag/sessions' },
];

class HomeView extends PureComponent {
    render() {
        return (
            <Grid>
                <Row>
                    <Col md={2} mdOffset={1}>
                        <TagList
                            tags={tagsFollowing}
                            path={this.props.location.pathname}
                        />
                    </Col>
                    <Col md={6}>
                        <h1>posts</h1>
                    </Col>
                    <Col md={2}>
                        <Panel>
                            <Panel.Heading>Improve your feed</Panel.Heading>
                            <Panel.Body>Panel content</Panel.Body>
                        </Panel>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default HomeView;
