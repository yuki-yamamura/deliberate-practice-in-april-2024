import AddButton from './add-button';
import ResetButton from './reset-button';
import TodoList from './todo-list';
import { getCookie, setCookie } from '@/app/actions/cookie';

const IncrementalTodoList = () => {
  const cookieName = 'access-count';
  const currentAccessCount = getCookie(cookieName)?.value;
  if (!currentAccessCount) {
    setCookie({ name: cookieName, value: '1' });
  }

  const params = Array.from(
    new Array(parseInt(currentAccessCount ?? '1')),
    (_, index) => index + 1,
  )
    .map((postId) => `${postId === 1 ? '?' : '&'}id=${postId}`)
    .join('');
  const url = `https://jsonplaceholder.typicode.com/posts${params}`;

  return (
    <div>
      <TodoList url={url} />
      <ResetButton />
      <AddButton />
    </div>
  );
};

export default IncrementalTodoList;
