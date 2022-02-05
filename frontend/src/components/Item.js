var React = require('react');
import { connect } from 'react-redux';
import { fetchItems } from '../actions/items';

class Item extends React.Component {

	componentDidMount() {
		console.log("Item mounted");
		const { dispatch } = this.props;
		dispatch(fetchItems());
	}

	render () {
		let content = <div>Fetching...</div>;

		if (!this.props.fetching) {
			if (this.props.item) {
				content = <div>Name: {this.props.item.name}</div>;
			} else {
				content = <div>Item not found</div>;
			}
		}

		return (
			<div>
				<h1>Item</h1>

				{content}
			</div>
		);
	}

};
Item.propTypes = {
	fetching: React.PropTypes.bool,
	item: React.PropTypes.object
};


const mapStateToProps = (state, ownProps) => {
	let fetching = state.items.fetching === true;
	let item = null;
	if (state.items.currentItems) {
		item = state.items.currentItems.find(i => i.id === ownProps.params.itemId);
	}
	return { fetching, item };
}

// Connects the state into the props for this component.
// This also injects "dispatch" into the props.
export default connect(mapStateToProps)(Item);
