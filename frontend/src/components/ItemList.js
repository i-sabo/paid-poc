import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchItems } from '../actions/items';

class Item extends React.Component {

    render () {
        let link = "/item/" + this.props.itemId;
        return (
            <div>
                <Link to={link}>{this.props.title}</Link>
            </div>
        );
    }
};
Item.propTypes = {
    itemId: React.PropTypes.string,
    title: React.PropTypes.string
};


class ItemList extends React.Component {

    componentDidMount() {
        console.log("ItemList mounted");
        const { dispatch } = this.props;
        dispatch(fetchItems());
    }

    render () {
        let content = <div>Fetching...</div>;

        if (!this.props.fetching) {
            let itemNodes = [];
            if (this.props.items) {
                console.log("items=" + JSON.stringify(this.props.items));
                itemNodes = this.props.items.map(function (item) {
                    return <Item key={item.id} itemId={item.id} title={item.name}/>;
                });
            }
            content = <div>{itemNodes}</div>;
        }

        return (
            <div>
                <h1>Current Hello Items</h1>

                {content}
            </div>
        );
    }

};
ItemList.propTypes = {
    items: React.PropTypes.array
};

// Connects the state into the props for this component.
// This also injects "dispatch" into the props.
export default connect(
    state => ({
        fetching: state.items.fetching,
        items: state.items.currentItems
    })
)(ItemList);
