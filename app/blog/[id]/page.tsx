// "use client"; // Если мы хотим работать со стэйтом, с методами жизненного цикла. Создаём клиентский компонент, и можем использовать хуки.

async function getData(id: string) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60, // периодичность проверки обновления (добавления на сервер) постов по времени в секундах
    },
  });

  return response.json();
}

import { Metadata } from "next";

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params: { id } }: Props): Promise<Metadata> {
  const post = await getData(id);
  // console.log(post); // работает только на сервере. У себя мы увидим только в терминале.
  return {
    title: post.title, // это мы в названии сайта
  };
}

export default async function Post({ params: { id } }: Props) {
  const post = await getData(id);

  return (
    <>
      <h1 className="heading"> {post.title}</h1>
      <p> {post.body} </p>
    </>
  );
}
