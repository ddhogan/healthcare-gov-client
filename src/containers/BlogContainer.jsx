import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBlog } from '../actions/contentActions';
import BlogList from '../components/blog/BlogList';

class BlogContainer extends Component {
  componentDidMount = () => {
    this.props.fetchBlog();
  }

  render() {
    return(
      <div className="BlogContainer">
        <h2>Blog Posts</h2>
        <BlogList blogPosts={this.props.blog}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({ blog: state.content.blog });

const mapDispatchToProps = dispatch => ({
  fetchBlog: () => dispatch(fetchBlog()),
})

export default connect(mapStateToProps, mapDispatchToProps)(BlogContainer);