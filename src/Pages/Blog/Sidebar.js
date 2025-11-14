import React from 'react';
import { Link } from "react-router-dom";

function Sidebar({BlogData}) {
  return (
    <div>
        <div className='sidebar'>
            <div className="widget">
                <h4>Recent Posts</h4>
                <ul>
                {BlogData.slice(0, 5).map((post) => (
                    <li key={post.id}>
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
                </ul>
            </div>

            <div className="widget">
                <h4>Categories</h4>
                <ul>
                <li>Marine Operations</li>
                <li>Offshore Energy</li>
                <li>Shipping Technology</li>
                <li>Logistics</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Sidebar