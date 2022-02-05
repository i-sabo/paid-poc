var React = require('react');

var Index = React.createClass({
    propTypes: {
        error: React.PropTypes.object
    },

    render: function () {
        return (
            <div>
                <h1>Page Not Found</h1>
                Sorry, no page was found at the given path.
            </div>
        );
    }
});

module.exports = Index;
