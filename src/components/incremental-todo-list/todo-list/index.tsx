type Props = {
  url: string;
};

const TodoList = async ({ url }: Props) => {
  const res = await fetch(url);
  const posts = (await res.json()) as {
    id: number;
    title: string;
  }[];

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};

export default TodoList;
