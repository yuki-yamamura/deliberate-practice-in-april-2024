import styles from './index.module.scss';

type Props = {
  index: number;
};

const Box = ({ index }: Props) => (
  <li
    className={styles.module}
    style={{
      translate: `${index}rem ${index}rem`,
    }}
  >
    {index}
  </li>
);

export default Box;
