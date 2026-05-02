import React from "react";
import blogData from "../blog.js";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

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