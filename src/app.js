import React from 'react';
import blogData from './blog.js';
import Header from './components/Header';
import About from './components/About';
import ArticleList from './components/ArticleList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header title={blogData.title} />
      <About about={blogData.about} />
      <ArticleList articles={blogData.articles} />
    </div>
  );
}

export default App;