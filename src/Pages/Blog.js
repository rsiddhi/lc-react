import React from 'react';
import { Link } from 'react-router-dom';

function Blog() {
    return (
        <div className="blog-container">
            <Link className="text-blue-400 block" to="/blog/1">Post 1</Link>
            <Link className="text-blue-400 block" to="/blog/2">Post 2</Link>
        </div>
    );
}

export default Blog;