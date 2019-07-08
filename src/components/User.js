import React from 'react'

export class User extends React.Component {
  renderTemplate = () => {
    const { name, error, isFetching } = this.props

    if (error) {
      return <p>Error, reload the page!</p>
    }

    if (isFetching) {
      return <p>Loading...</p>
    }

    if (name) {
      return <p>Hi, {name}!</p>
    } else {
      return (
        <button className="btn" onClick={this.props.handleLogin}>
          Log in
        </button>
      )
    }
  }
  render() {
    return <div className="ib user">{this.renderTemplate()}</div>
  }
}

