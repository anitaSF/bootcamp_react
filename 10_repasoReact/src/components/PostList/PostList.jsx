import { useState } from "react";

function PostList({ datosApi }) {
    const [post, setPost] = useState([]);
    return (
        <>
            <h1>Lista de Post</h1>
            {datosApi.map((post, index) => (
                <article key={index}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </article>
            ))
            }
        </>

    );
};

export default PostList;