import './Blogs.css';
import React from 'react';
import blogApi from './BlogApi';

const Blogs = () => {
  return (
    <div className="Blogs">
      <div className="blog_container">
        {
          blogApi.map((blog, idx) => 
            <div key={idx} className="single_blog">
              <a href={blog.link} target="blank" className="blog_link">
                <img src={blog.coverImg} alt={blog.title} className="blog_cover" />
                <h4 className="blog_title">{blog.title}</h4>
              </a>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Blogs;