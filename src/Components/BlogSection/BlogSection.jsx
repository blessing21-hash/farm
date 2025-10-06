import React from "react";
import "./BlogSection.css";

const posts = [
  {
    categry: "FOOD CROPS",
    image: "/images/blog1.jpg",
    date: "MARCH 28, 2024",
    author: "ADMIN",
    title: "What technology is used in vertical farming?",
  },
  {
    categry: "ORGANIC FARM",
    image: "/images/blog2.jpg",
    date: "MARCH 28, 2024",
    author: "ADMIN",
    title: "Which type of farming is more prevalent today?",
  },
  {
    categry: "FARMING TIPS",
    image: "/images/blog3.jpg",
    date: "MARCH 28, 2024",
    author: "ADMIN",
    title: "The Farmers Sentiment Darkens Hopes Fade",
  },
];

const BlogSection = () => {
  return (
    <section className="blog">
      <div className="blog-header">
        <span className="blog-badge">Latest Blog</span>
        <h2>Latest posts & articles</h2>

        <div className="blog-nav">
          <button className="nav-btn">❮</button>
          <button className="nav-btn">❯</button>
        </div>
      </div>

      <div className="blog-grid">
        {posts.map((post, index) => (
          <div key={index} className="blog-card">
            <div className="blog-image">
              <img src={post.image} alt={post.title} />
              <span className="categry">{post.categry}</span>
              <div className="arrow-btn">➜</div>
            </div>

            <div className="blog-meta">
              <span className="date">📅 {post.date}</span>
              <span className="author">👤 {post.author}</span>
            </div>

            <h3>{post.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
