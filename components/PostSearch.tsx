// Клиентский компонент
"use client";

import { usePosts } from "@/public/services/store";
import { useState, FormEventHandler } from "react";

const PostSearch = () => {
  const [search, setSearch] = useState("");
  const getPostsBySearch = usePosts((state) => state.getPostsBySearch);
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const posts = await getPostsBySearch(search);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="search" value={search} onChange={(event) => setSearch(event.target.value)} />
      <button type="submit"> search </button>
    </form>
  );
};

export { PostSearch };
