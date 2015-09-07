var React = require('react');

var PageContainer = React.createClass({
    render: function() {
        return (<div>Hello world</div>);
    }
});

React.render(<PageContainer />, document.getElementById('react-content'));