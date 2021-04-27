import React from "react";
import BlogCard from "../BlogCard/BlogCard";
import { Helmet } from "react-helmet";

import PageHeader from "../../utilities/PageHeader/PageHeader";
import getBlogInfo from "../../utilities/getBlogInfo";

import cardImage from "../../../images/IMG_0307.JPG";

import "./BlogMenu.css";

const BlogMenu = () => {
  const filename = "prepare-your-property";
  const blogInfo = getBlogInfo(filename);

  return (
    <div className="section-blog">
      <Helmet>
        <title>internn | Blog.</title>
        <meta
          name="description"
          content="Stay up to date with the incredible work all our internn students are doing whilst on the job, taking beautiful property photos for our customers."
        />
      </Helmet>
      <PageHeader title="Blog" subtitle="Keep watch for new posts soon!" />
      <div className="blog-cards">
        <BlogCard blogText={blogInfo} image={cardImage} />
      </div>
    </div>
  );
};

export default BlogMenu;