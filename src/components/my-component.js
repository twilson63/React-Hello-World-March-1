import React from 'react'

// the old way createClass
var MyComponent = React.createClass({
  render: function () {
    return (
      <h1 className={this.props.color}>
        <span>{this.props.title}</span>
      </h1>
    )
  }
})

export default MyComponent
