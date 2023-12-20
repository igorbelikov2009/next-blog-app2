import { Metadata } from "next";
import Link from "next/link";

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60, // периодичность проверки обновления (добавления на сервер) постов по времени в секундах
    },
  });
  // если будет ошибка
  if (!response.ok) throw new Error("Не удается получить сообщения");

  return response.json();
}

export const metadata: Metadata = {
  title: "Blog | Next App",
};

// Серверные компоненты могут быть ассинхронными - async
export default async function Blog() {
  const posts = await getData();

  return (
    <>
      <h1 className="heading">Blog page </h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}> {post.title} </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
