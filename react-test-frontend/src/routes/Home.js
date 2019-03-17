import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import './Home.css';

class Home extends Component {

  state = {
    posts: [],
    featured: {}
  }

  componentDidMount = () => {
    this.getPosts(1);
  }

getPosts = (page) => {
  const endPoint = 'http://reacttestbackend.local/wp-json/wp/v2';
  
  const urls = [`${endPoint}/posts?tags=7`,
  `${endPoint}/posts?per_page=3&page=${page}`];

  Promise.all(urls.map(url =>
    fetch(url)
      .then(res => res.json())
    ))
    .then(posts => {
      this.setState({
        featured: posts[0][0],
        posts: posts[1]
      })
    })
    .catch(err => console.log(err))
}

  postClick = (e, postSlug) => {
    e.preventDefault();
    const { history } = this.props;
    history.push(`/post/${postSlug}`);
  }

  render() {
    const { posts, featured } = this.state;
    return (
      <div className="App">
        <Helmet>
          <title>{this.state.yoast_meta && this.state.yoast_meta.yoast_wpseo_title}</title>
          <meta name="description" content={this.state.excerpt && this.state.excerpt} />
          <meta name="theme-color" content="#008f68" />
        </Helmet>
        <section>
          {featured.id &&
          <div className="top-content-container">
          <div className='post item-0' key={featured.id} style={{backgroundImage: `url(${featured.featured_image_url})`}}>
            <a href="/" className='post-title' onClick={ e => {this.postClick(e, featured.slug)}}>{featured.title && featured.title.rendered}</a>
          </div>
          {
            posts.map((post, i) => (
              <div className={`post item-${i+1}`} key={post.id} style={{backgroundImage: `url(${post.featured_image_url})`}}>
                <a href="/" className='post-title' onClick={ e => {this.postClick(e, post.slug)}}>{post.title.rendered}</a>
              </div>
          ))
          } 
          </div>
        }
        </section>
      </div>
    );
  }
}

export default Home;
