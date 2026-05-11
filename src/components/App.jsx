import React from "react";
import blogData from "../blog"; 
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About image={blogData.image} about={blogData.about} />
      {/* Ensure the prop name is 'posts' to match the component */}
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;