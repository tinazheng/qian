'use strict';

var React = require('react');

var PageContainer = React.createClass({
    displayName: 'PageContainer',

    render: function render() {
        return React.createElement(
            'div',
            null,
            'Hello world'
        );
    }
});

React.render(React.createElement(PageContainer, null), document.getElementById('react-content'));