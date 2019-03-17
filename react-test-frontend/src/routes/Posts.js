import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import './Posts.css';

class Posts extends Component {

  state = {
    posts: [],
    totalPages: 0,
    page: 1
  }

  componentDidMount = () => {
    this.getPosts();
  }

getPosts = (page = 1) => {
    let totalPages;
    let total;

    fetch(`http://reacttestbackend.local/wp-json/wp/v2/posts?per_page=3&page=${page}`)
      .then(res => {
        totalPages = res.headers.get('x-wp-totalpages');
        total = res.headers.get('x-wp-total');
        return res;
      })
      .then(res => res.json())
      .then(posts =>
        this.setState({
          posts,
          totalPages,
          total
        })
      )
      .catch(err => console.log(err))
}

  postClick = (e, postSlug) => {
    e.preventDefault();
    const { history } = this.props;
    history.push(`/post/${postSlug}`);
  }

  page = (e, i) => {
      const { totalPages } = this.state;
      if(i >= 1 && i <= totalPages) {
        this.setState({page: i});
        this.getPosts(i);
      }
  }

  render() {
    const { posts, totalPages, page } = this.state;
    const pagination = Array.apply(null, { length: totalPages }).map((e, i) => (
      <button className={(i+1) === page ? `page-active`: null} onClick={e => this.page(e, (i+1))} key={i+1}>
        {(i=== 0) ? 'First Page' : i+1}
      </button>
    ))
    return (
      <div className="App">
        <Helmet>
          <title>{this.state.yoast_meta && this.state.yoast_meta.yoast_wpseo_title}</title>
          <meta name="description" content={this.state.excerpt && this.state.excerpt} />
          <meta name="theme-color" content="#008f68" />
        </Helmet>
        <section>
          <div className="top-posts-container">
          {
            posts.map(post => (
                <div className='post-list' key={post.id} style={{backgroundImage: `url(${post.featured_image_url})`}}>
                <a href="/" className='post-list-title' onClick={ e => {this.postClick(e, post.slug)}}>{post.title.rendered}</a>
              </div>
          ))
          } 
          </div>
          <button onClick={e => this.page(e, (page - 1))}>{'<'}</button>
          { pagination }
          <button onClick={e => this.page(e, (page + 1))}>{'>'}</button>
        </section>
      </div>
    );
  }
}

export default Posts;
