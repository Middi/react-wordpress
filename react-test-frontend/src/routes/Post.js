import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import './Post.css';

class Post extends Component {

  state = {
    post: {},
    catPosts: []
  }
  
  componentDidMount = () => {
    const { match } = this.props;
    const postSlug = match.params.id;
    fetch(`http://reacttestbackend.local/wp-json/wp/v2/posts?slug=${postSlug}`)
      .then(res => res.json())
      .then(res => {
        this.setState({post: res[0]})
        let cat = res[0].categories;
        let urls = [];

        cat.forEach(item => {
          urls.push(`http://reacttestbackend.local/wp-json/wp/v2/posts?categories=${item}`)
        });

        Promise.all(urls.map(url =>
          fetch(url)
            .then(res => res.json())
          ))
          .then(posts => this.setState({catPosts: posts[0]}))
          .catch(err => console.log(err))
          })
      .catch(err => console.log(err))    
  }

  render() {
    const { post, catPosts } = this.state;
    return (
      <div className="App">
      <Helmet>

          <title>{this.state.yoast_meta && this.state.yoast_meta.yoast_wpseo_title}</title>
          <meta name="description" content={this.state.excerpt && this.state.excerpt} />
          <meta name="theme-color" content="#008f68" />
        </Helmet>
        {post.title && <h1 key={post.title.rendered}>{post.title.rendered}</h1>}
        {post.content &&  <p dangerouslySetInnerHTML={{__html: post.content.rendered}}></p>}
        <div className="category-posts">
          <h1>Similar Posts</h1>
          <ul>
            {catPosts.filter(item => {
              return item.id !== post.id
            }).map(catPost => (
              <li key={catPost.id}><a href={catPost.slug}>{catPost.title.rendered}</a></li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Post;
