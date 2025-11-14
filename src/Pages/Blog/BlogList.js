// src/components/Blog/BlogList.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import BlogData from "./BlogData";
import OtherPages from '../../Components/OtherPages/OtherPages'
import "./Blog.scss";
import Sidebar from './Sidebar';

function BlogList() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = BlogData.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(BlogData.length / postsPerPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
        <OtherPages
            pageName="Blog"
        />
        <div className='blog-section'>
            <section className=" container py-5">
                <div className="topSession">
                    <div className="sub-heading">News & Article</div>
                    <div className='main-heading'>Latest News & <span>Insights</span></div>
                </div>
                <div className="row g-4">
                    <div className="col-lg-8 col-md-12">
                        <div className="blog-list">
                            {currentPosts.map((post) => (
                            <div className="blog-card" key={post.id}>
                                <div className='img-holder'>
                                    <div className='immer'>
                                    <img src={post.image} alt={post.title} className="img-fluid" />
                                    </div>
                                </div>
                                <div className="text-holder">
                                    <h3>{post.title}</h3>
                                    <div className="meta">
                                        {post.date} | By {post.author}
                                    </div>
                                    <p>{post.excerpt}</p>
                                    <Link to={`/blog/${post.id}`} className="read-more">
                                        Read More →
                                    </Link>
                                </div>
                            </div>
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="pagination">
                            {[...Array(totalPages)].map((_, index) => (
                            <button
                                key={index}
                                className={`page-btn ${
                                currentPage === index + 1 ? "active" : ""
                                }`}
                                onClick={() => handlePageChange(index + 1)}
                            >
                                {index + 1}
                            </button>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="col-lg-4 col-md-12 ">
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

export default BlogList;
