var React = require('react');
import { Link } from 'react-router';

var Layout = React.createClass({
    propTypes: {
        title: React.PropTypes.string
    },

    render: function () {
        return (
          <div>
            <div>
              <Link to="/">Home</Link>
            </div>

            {this.props.children}
          </div>
        );
    }
});

module.exports = Layout;
