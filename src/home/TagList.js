import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const styleSheet = {
    tag: {
        border: 'none',
        backgroundColor: 'transparent',
        padding: 5,
        color: '#666',
    },
    tag_active: {
        backgroundColor: '#e6e6e6',
    },
    tag_item: {
        backgroundColor: 'transparent',
    },
};

export default class TagList extends Component {
    checkIsActiveTag = path =>
        this.props.path === path
            ? { ...styleSheet.tag, ...styleSheet.tag_active }
            : { ...styleSheet.tag, ...styleSheet.tag_item };

    render() {
        const { tags } = this.props;

        return (
            <ListGroup>
                {tags.map(item => (
                    <ListGroupItem
                        className="tag"
                        style={this.checkIsActiveTag(item.path)}
                        onClick={() => console.log('sdds sage')}
                    >
                        {' '}
                        {item.name}{' '}
                    </ListGroupItem>
                ))}
            </ListGroup>
        );
    }
}
