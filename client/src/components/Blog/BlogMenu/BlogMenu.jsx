import React, { Component } from "react";
import BlogCard from "../BlogCard/BlogCard";

import PageHeader from "../../utilities/PageHeader/PageHeader";
import getBlogInfo from "../../utilities/getBlogInfo";

import cardImage from "../../../images/IMG_0307-min.jpg";

import "./BlogMenu.css";

const BlogMenu = () => {
  const filename = "prepare-your-property";
  const blogInfo = getBlogInfo(filename);

  return (
    <div className="section-blog">
      <PageHeader title="Blog" subtitle="Keep watch for new posts soon!" />
      <div className="blog-cards">
        <BlogCard blogText={blogInfo} image={cardImage} />
      </div>
    </div>
  );
};

export default BlogMenu;
