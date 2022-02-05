import * as ActionTypes from '../actions/constants';

export default function items(state = {}, action) {
    console.log("Reducing items: " + action.type);
    switch (action.type) {
      case ActionTypes.FETCHING_ITEMS:
        return Object.assign({}, state, {
        	fetching: true
    	});
      case ActionTypes.GET_ITEMS:
        return Object.assign({}, state, {
        	fetching: false,
      		currentItems: action.items
      	});
      default:
        return state;
    }
}
