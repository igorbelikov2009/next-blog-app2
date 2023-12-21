// Клиентский компонент
"use client"; // use zustand

import { usePosts } from "@/public/services/store";
import Link from "next/link";
import React, { useEffect } from "react";
import { shallow } from "zustand/shallow"; // use zustand

const Posts = () => {
  const [posts, loading, getAllPosts] = usePosts((state) => [state.posts, state.loading, state.getAllPosts], shallow);

  useEffect(() => {
    getAllPosts();
  }, [getAllPosts]);

  return (
    <>
      {loading ? (
        <h3> Loading...</h3>
      ) : (
        <ul>
          {posts.map((post: any) => (
            <li key={post.id}>
              <Link href={`/blog/${post.id}`}> {post.title} </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Posts;
