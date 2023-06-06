import React, { useState, useEffect } from 'react';
import useFetch from "../Hooks/useFetch";
import { useQuery, QueryClientProvider } from 'react-query';

function Reddit() {
     // const {data:posts, isLoading, errorMessage} = useFetch('https://www.reddit.com/r/aww.json');

    const {
        data:posts,
        isLoading,
        errorMessage,
        isError,
        error,
        isSuccess
    } = useQuery('posts', fetchPosts,{
        retry: false,
    });

    function fetchPosts() {
        return fetch('https://www.reddit.com/r/aww.json').then(response =>
            response.json()
        );
    }

    return (
        <>
            {isLoading &&
            <div>Loading...</div>
            }

            {posts && <ul>
                {posts.data.children.map(post => (
                    <li key={post.data.id}>
                        <a href={`https://reddit.com${post.data.permalink}`}>
                            {post.data.title}
                        </a>
                    </li>

                ))}
            </ul>
            }
            {errorMessage && <span>{errorMessage}</span>}
        </>
    );
}

export default Reddit;