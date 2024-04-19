import Boxes from '@/components/Boxes';

import styles from './index.module.scss';

const Home = () => {
  return (
    <main className={styles.main}>
      <h1>Hello, World!</h1>
      <Boxes quantity={3} />
    </main>
  );
};

export default Home;
