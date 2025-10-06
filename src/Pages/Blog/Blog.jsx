


import React from "react";
import BlogHero from "../../Components/BlogHero/BlogHero";
import Footer from "../../Components/Footer/Footer";
import BlogAll from "../../Components/BlogAll/BlogAll";
import "./Blog.css";


const Blog = () => {
  return (
    <div className="blog-page">
       { <div className="overlay"></div> }
        <BlogHero />
        <BlogAll />
        
      <Footer />
    </div>
  );
};

export default Blog;