import IncrementalTodoList from '@/components/incremental-todo-list';

import styles from './index.module.scss';

const Home = () => {
  return (
    <main className={styles.main}>
      <IncrementalTodoList />
    </main>
  );
};

export default Home;
