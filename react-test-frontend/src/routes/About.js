import React, { Component } from 'react'

export default class About extends Component {
  state = {
    page: {}
  }

  componentDidMount = () => {
    const { match } = this.props;
    const postSlug = match.params.id;
    fetch(`http://reacttestbackend.local/wp-json/wp/v2/pages?slug=${postSlug}`)
      .then(res => res.json())
      .then(page => this.setState({page: page[0]}))
      .catch(err => console.log(err))
  }

  render() {
    const { page } = this.state;
    return (
      <div>
        <h1>{page.title ? page.title.rendered : null}</h1>
        {page.content &&  <p dangerouslySetInnerHTML={{__html: page.content.rendered}}></p>}
      </div>
    )
  }
}
