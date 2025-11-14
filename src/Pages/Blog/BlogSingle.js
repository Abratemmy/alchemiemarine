// src/components/Blog/BlogSingle.js
import React from "react";
import { useParams, Link } from "react-router-dom";
import BlogData from "./BlogData";
import "./Blog.scss";
import OtherPages from '../../Components/OtherPages/OtherPages'
import Sidebar from './Sidebar';

function BlogSingle() {
  const { id } = useParams();
  const post = BlogData.find((p) => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="container py-5">
        <h2>Post not found</h2>
        <Link to="/blog">← Back to Blog</Link>
      </div>
    );
  }

  return (
    <>
        <OtherPages
            pageName="Blog Details"
        />
        <div className='blog-single'>
            <section className=" container py-5">
                <div className="topSession">
                    <div className="sub-heading">Blog Details</div>
                    <div className='main-heading'>Dive into Insights, Stories <span>And Updates</span></div>
                </div>

                <div className="row g-4">
                    <div className="col-lg-8 col-md-12">
                        <div className="blog-singleContent">
                            <img src={post.image} alt={post.title} className="img-fluid" />
                            <div className='details'>
                                <div className='title'>{post.title}</div>
                                <p className="meta">
                                    {post.date} | By {post.author}
                                </p>
                                <div className="content">
                                    {post.content.split("\n").map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                    ))}
                                </div>
                                <Link to="/blog" className="back-link">
                                    ← Back to Blog
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <Sidebar
                            BlogData={BlogData}
                        />
                    </div>
                </div>
            </section>
        </div>
    </>
  );
}

export default BlogSingle;
