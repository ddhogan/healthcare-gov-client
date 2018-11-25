import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchArticles } from '../actions/contentActions';
import ArticleList from '../components/articles/ArticleList';

class ArticlesContainer extends Component {
  componentDidMount = () => {
    this.props.fetchArticles();
  }

  render() {
    return(
      <div className="ArticlesContainer">
        <h2>Articles</h2>
        <ArticleList articles={this.props.articles}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({ articles: state.content.articles });

const mapDispatchToProps = dispatch => ({
  fetchArticles: () => dispatch(fetchArticles()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesContainer);