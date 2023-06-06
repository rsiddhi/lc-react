import React from 'react';
import { useParams, Link } from 'react-router-dom';

function BlogPost() {
    const params = useParams();
    return (
        <>
            <p className="text-bold">
                This is post {params.id}.
            </p>

            <Link className="text-blue-400" to="/blog">Back</Link>
        </>
    );
}

export default BlogPost;